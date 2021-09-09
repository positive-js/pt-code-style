/**
 * @typedef {Object} RestrictedImport
 * @property {{name: string, message: string}[]} paths
 * @property {string[]} patterns
 */
const restrictedImports = {
        paths: [
            {
                name: "lodash",
                message: "Please use lodash-es instead.",
            },
        ],
        patterns: []
};

module.exports = {
    rules: {
        // disallow specified modules when loaded by `import`
        // https://eslint.org/docs/rules/no-restricted-imports
        "no-restricted-imports": ["warn", restrictedImports]
    }
};
