const allowedProperties = require('./utils/allowedProperties');

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
         */
        '@typescript-eslint/array-type': 'warn',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
         */
        '@typescript-eslint/ban-ts-comment': [
            'warn',
            {
                'ts-check': false,
                'ts-nocheck': true,
                'ts-ignore': true,
                'ts-expect-error': false,
            },
        ],

        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'default',
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid'
            },
            // Property
            { selector: 'variable', format: ['camelCase'] },
            {
                selector: 'variable',
                modifiers: ['const'],
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            },
            { selector: 'function', format: ['strictCamelCase'] },
            { selector: 'parameter', format: ['strictCamelCase'] },

            // ParameterLike
            {
                selector: 'property',
                format: ['camelCase', 'UPPER_CASE'],
                filter: { regex: `^(${allowedProperties.join('|')})$`, match: false },
            },

            { selector: 'class', format: ['StrictPascalCase'] },
            {
                selector: 'class',
                modifiers: ['abstract'],
                format: ['StrictPascalCase'],
                prefix: ['Abstract']
            },

            { selector: 'method', format: ['camelCase'] },
            { selector: 'accessor', format: ['camelCase'] },
            { selector: 'enumMember', format: ['camelCase', 'UPPER_CASE'] },

            // TypeLike
            { selector: 'typeLike', format: ['camelCase'] },
        ],

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
         */
        '@typescript-eslint/no-shadow': [
            'warn',
            {
                hoist: 'all',
                ignoreFunctionTypeParameterNameValueShadow: false,
                ignoreTypeValueShadow: false
            }
        ],
        'no-shadow': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
         *
         * Don’t allow private constructors
         */
        '@typescript-eslint/no-useless-constructor': 'off',
        'no-useless-constructor': 'error',
    }
};
