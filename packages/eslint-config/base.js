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
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    root: true
};

