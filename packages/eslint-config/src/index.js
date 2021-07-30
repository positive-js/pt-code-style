const getIgnorePatterns = require('./utils/get-ignore-patterns');


module.exports = {

    ignorePatterns: getIgnorePatterns(),

    env: {
        browser: true,
        es2020: true,
        node: true,
    },

    plugins: [],
    rules: {},
    settings: {},

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },

    globals: {
        __DEV__: 'readonly',
        SharedArrayBuffer: 'readonly',
    }
};


[
    'best-practices',
    'deprecated',
    'possible-errors',
    'variables'
].forEach((name) => {
    const rules = require(`./core/${name}`);

    Object.assign(module.exports.rules, rules);
});

[
    'eslint-comments',
    'import',
    'typescript-eslint'
].forEach((name) => {
    const preset = require(`./plugins/${name}`);

    module.exports.plugins.push(name);

    Object.assign(module.exports.rules, preset.rules);
    Object.assign(module.exports.settings, preset.settings);
});
