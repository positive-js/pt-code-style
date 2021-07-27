module.exports = {
    extends: [
        './plugins/import.js',
        './plugins/eslint-comments.js',
        './plugins/typescript-eslint.js'
    ],

    env: {
        browser: true,
        es2020: true,
        node: true,
    },

    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },

    globals: {
        __DEV__: 'readonly',
        SharedArrayBuffer: 'readonly',
    },

    ignorePatterns: [
        "!.*",

        ".git/",
        "node_modules/",
        ".npm/",

        "lib-cov/",
        "coverage/",
        ".nyc_output/",
        ".cache/",

        "build/",
        "dist/",
        "tmp/",

        "**/*.min.*",
    ]
};
