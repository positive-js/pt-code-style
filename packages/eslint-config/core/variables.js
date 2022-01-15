const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
    rules: {
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
        'no-restricted-globals': ['error', ...confusingBrowserGlobals],

        /**
         * https://eslint.org/docs/rules/func-style
         */
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true
            }
        ],
        /**
         * https://eslint.org/docs/rules/no-shadow
         */
        'no-shadow': [
            'error',
            {
                hoist: 'all',
                allow: ['done', 'resolve', 'reject']
            }
        ],

        'no-underscore-dangle': ['warn', { enforceInMethodNames: true, allowAfterThis: true }]
    }
};
