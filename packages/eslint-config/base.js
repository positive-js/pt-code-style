const getIgnorePatterns = require("./utils/get-ignore-patterns");
/**
 * Базовый конфиг
 */
module.exports = {
    ignorePatterns: getIgnorePatterns(),
    plugins: [],
    extends: [],
    rules: {},
    settings: {},
    globals: {
        __DEV__: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    root: true
};

