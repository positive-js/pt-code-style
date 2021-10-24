const allowedProperties = require('../utils/allowed-properties');

module.exports = {
    // parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    rules: {
        // из-за этого правила падает линтер
        '@typescript-eslint/unbound-method': 'off',

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
            {
                selector: 'classProperty',
                // modifiers: ['private', 'protected'],
                format: ['camelCase'],
                leadingUnderscore: 'allow'
            },

            { selector: 'class', format: ['StrictPascalCase'] },
            {
                selector: 'class',
                modifiers: ['abstract'],
                format: ['StrictPascalCase'],
            },
            { selector: 'method', format: ['camelCase'] },
            { selector: 'accessor', format: ['camelCase'] },
            { selector: 'enum', format: ['StrictPascalCase'] },
            { selector: 'enumMember', format: ['PascalCase', 'UPPER_CASE'] },
            { selector: 'typeLike', format: ['StrictPascalCase'] },
            { selector: 'interface', format: ['PascalCase'] }
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
         * Правило @typescript-eslint/no-useless-constructor не правильно работает с DI в некоторых случаях (когда параметр берем из DI и передаем в super())
         * Правило no-useless-constructor не учитывает public private в параметрах конструктора
         */
        '@typescript-eslint/no-useless-constructor': 'off',
        'no-useless-constructor': 'off',

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
         *
         * This rule prohibits iterating over an array with a for-in loop.
         */
        "@typescript-eslint/no-for-in-array": "error",

        /**
         * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
         *
         * This rule extends the base eslint/no-unused-expressions rule.
         * It adds support for optional call expressions x?.(), and directive in module declarations.
         */
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",

        /*
        * This rule disallows awaiting a value that is not a "Thenable" (an object which has then method, such as a Promise).
        * While it is valid JavaScript to await a non-Promise-like value (it will resolve immediately), this pattern is often a programmer error,
        * such as forgetting to add parenthesis to call a function that returns a Promise.
        * */
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/restrict-plus-operands": "error",

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn',  {"args": "after-used"}],
        "@typescript-eslint/no-floating-promises": "off", //error in recommended-requiring-type-checking
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/prefer-readonly": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        // ждем поддержки getters and setters в версии 5 https://github.com/typescript-eslint/typescript-eslint/pull/3611
        '@typescript-eslint/member-ordering': 'off',
        "@typescript-eslint/no-magic-numbers": [
            'error',
            {
                ignore: [-1, 0, 1, 2],
                ignoreDefaultValues: true,
                ignoreReadonlyClassProperties: true
            }],
        '@typescript-eslint/no-misused-promises': 'warn'
    }
};
