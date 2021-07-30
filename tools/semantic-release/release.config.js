const GraphemeSplitter = require('grapheme-splitter');
const _pullAt = require('lodash/pullAt');

const releaseRules = require('./releaseRules');
const typeSpecs = require('./typeSpecs');

const splitter = new GraphemeSplitter();

const parserOpts = {
    headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
    noteKeywords: ['💥️  BREAKING CHANGE', 'BREAKING CHANGE'],
    referenceActions: typeSpecs.map(({type}) => type),
    revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./
};

const writerOpts = {
    transform: (commit, _context) => {
        const {type} = commit;

        // Rewrite types
        const typeSpecIndex = typeSpecs.findIndex(
            ({code: c, emoji: e, type: t, value: v}) => {
                if (type === null) return
                return (
                    // @hack(semantic-release) strip colon from :type: for stricter comparison
                    type.replace(/\:/g, '') === c.replace(/\:/g, '') ||
                    type === e ||
                    type === t ||
                    type === v
                );
            }
        );

        if (typeSpecIndex === -1) return;

        const typeSpec = typeSpecs[typeSpecIndex];

        if (!typeSpec.releaseNotes) return;

        commit.type = `${typeSpec.emoji}  ${typeSpec.section}`;
        commit.typeSpecIndex = typeSpecIndex;
        // @semver
        if (typeSpec.semver === 'major' || typeSpec.semver === 'breaking') {
            commit.order = 1;
        }
        if (typeSpec.semver === 'minor' || typeSpec.semver === 'feature') {
            commit.order = 3;
        }
        if (typeSpec.semver === 'patch') {
            commit.order = 5;
        }
        if (typeSpec.semver === null) {
            commit.order = 7;
        }
        if (!Boolean(typeSpec.semver)) {
            commit.order = 9;
        }

        if (typeof commit.hash === 'string') {
            commit.hash = commit.hash.substring(0, 7);
        }

        const subjectTemp = splitter.splitGraphemes(commit.subject);
        const isEmojiMatch = subjectTemp[0] === typeSpec.emoji;
        const subject = isEmojiMatch
            ? commit.subject
                .replace(_pullAt(subjectTemp, [0]), '')
                .replace(_pullAt(subjectTemp, [0]), '')
            : commit.subject;

        commit.subject = subject;

        return commit;
    },
    commitGroupsSort: ['order'],
    commitsSort: ['order'],
    groupBy: 'type',
};

module.exports = {

    branches: [
        { name: 'release/\\w*' }
    ],

    extends: ['semantic-release-commit-filter'],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
             {
                 parserOpts,
                 releaseRules
             }
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'angular',
                parserOpts,
                writerOpts
            }
        ],
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md"
            }
        ],
        [
            '@semantic-release/npm',
            {
                npmPublish: true
            }
        ],
        [
            '@semantic-release/git', {
                assets: ['CHANGELOG.md'],
                message: 'Build: ${nextRelease.gitTag} [skip ci]',
            }
        ],
        [
            '@semantic-release/gitlab',
            {
                assets: ['CHANGELOG.md'],
                gitlabUrl: 'https://gitlab.ptsecurity.com',
                gitlabApiPathPrefix: '/api/v4'
            }
        ],
        [
            '@semantic-release/exec',
            {
                prepareCmd:
                    'echo sh ./scripts/postSemanticRelease.sh ${nextRelease.version} ${nextRelease.channel} ${nextRelease.gitHead} ${nextRelease.gitTag}',
            }
        ]
    ]
};
