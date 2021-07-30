const confusingBrowserGlobals = require('confusing-browser-globals');


module.exports = {
    /**
     * https://eslint.org/docs/rules/init-declarations
     */
    'init-declarations': 'off',

    /**
     * https://eslint.org/docs/rules/no-delete-var
     */
    'no-delete-var': 'off',

    /**
     * https://eslint.org/docs/rules/no-restricted-globals
     */
    'no-restricted-globals': ['error', ...confusingBrowserGlobals]
};
