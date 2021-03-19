module.exports = {
    rules: {
        '@angular-eslint/component-selector': [
            'error',
            {
                type: 'element',
                prefix: 'app',
                style: 'kebab-case'
            }
        ],
        '@angular-eslint/directive-selector': [
            'error',
            {
                type: 'attribute',
                prefix: 'app',
                style: 'camelCase'
            }
        ],
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                "pathGroups": [
                    {
                        "pattern": "~*",
                        "group": "external",
                    },
                    {
                        "pattern": "~**/**",
                        "group": "external"
                    },

                ]
            }
        ],
        'max-lines-per-function': [
            'error',
            100
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid'
            },

            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE']
            },
            {
                selector: 'function',
                format: [
                    'strictCamelCase'
                ]
            },
            {
                selector: 'typeLike',
                format: ['StrictPascalCase']
            },
            {
                selector: 'interface', format: ['StrictPascalCase'], prefix: ['I']
            },
            {
                selector: 'enum',
                format: ['StrictPascalCase']
            },
            {
                selector: 'parameter',
                format: ['strictCamelCase'],
                leadingUnderscore: 'allow'
            },
            {
                selector: 'enumMember',
                format: [
                    'UPPER_CASE',
                    'PascalCase'
                ]
            },
            {
                selector: 'property',
                format: [
                    'camelCase',
                    'UPPER_CASE'
                ]
            },
            {
                selector: 'property',
                format: [
                    'camelCase',
                    'UPPER_CASE'
                ],
                modifiers: ['private'],
                leadingUnderscore: 'allow'
            },
            {
                selector: 'class',
                format: ['StrictPascalCase']
            },
            {
                selector: 'class',
                modifiers: ['abstract'],
                format: ['StrictPascalCase'],
                prefix: ['Abstract']
            }
        ],
        'no-restricted-syntax': [
            'error',
            'WithStatement',
            'BinaryExpression[operator=\'in\']'
        ],
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true
            }
        ],
        'no-empty-function': [
            'error',
            {
                allow: [
                    'constructors'
                ]
            }
        ],

        /*******************************************************************************************************
         * Одобренные правила
         *******************************************************************************************************/

        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-void": "error",
        "no-var": "error",
        "no-eval": "error",
        "no-magic-numbers": ["error", { "ignore": [-1, 0, 1, 2], "ignoreDefaultValues": true }],
        "no-return-await": "error",
        "no-duplicate-imports": "error",

        /*******************************************************************************************************
         * Обсуждаемые правила
         *******************************************************************************************************/

        // Old: есть в recommended-requiring-type-checking.
        // A мы где-то используем recommended-requiring-type-checking?
        "@typescript-eslint/no-for-in-array": "error",

        // Old: почему?
        // В целом правило кажется полезным, а вот { "allowShortCircuit": true, "allowTernary": true } думаю не нужны
        "@typescript-eslint/no-unused-expressions": "error",

        // Old: Зачем?
        // Правило запрещает "Hello ${name}!"; кажется, что при наличии `Hello ${name}!`, они и не нужны.
        // Правда это только для ECMAScript 6, но вроде у нас все проекты на Angular 10 на ECMAScript 6 и выше
        "no-template-curly-in-string": "error",

        // Old: почему столько исключений?
        //Оставила warn и error
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "error"
                ]
            }
        ],

        /*******************************************************************************************************
         * Новые правила
         *******************************************************************************************************/
        "max-len": [
            "error",
            {
                "code": 120,
                "ignorePattern": "^import\\s.+\\sfrom\\s.+;$",
                "ignoreUrls": true
            }
        ],
        "no-shadow": [
            "error",
            {
                "hoist": "all",
                "allow": ["done", "resolve", "reject"]
            }
        ],

        "object-shorthand": "error", // w() {}, вместо w: function() {}
        "prefer-template": "error",
        "prefer-object-spread": "error", // Object.assign(...foo); вместо Object.assign({}, foo)
        "prefer-arrow/prefer-arrow-functions": [
            "warn",
            {
                "disallowPrototype": true,
                "singleReturnOnly": true,
                "classPropertiesAllowed": false,
                "allowStandaloneDeclarations": true
            }
        ],
        "prefer-const": "error",
        "rxjs/no-internal": "error",
        "use-isnan": "error", // isNaN() rather then foo == NaN
        "yoda": "error", // Yoda conditions are so named because the literal value of the condition comes first while the variable comes second

        /*******************************************************************************************************
         * Новейшие правила
         *******************************************************************************************************/

        //в recommended-requiring-type-checking есть еще несколько наших правил:
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts

        /*
        * This rule disallows awaiting a value that is not a "Thenable" (an object which has then method, such as a Promise).
        * While it is valid JavaScript to await a non-Promise-like value (it will resolve immediately), this pattern is often a programmer error,
        * such as forgetting to add parenthesis to call a function that returns a Promise.
        * */
        "@typescript-eslint/await-thenable": "error",

        "@typescript-eslint/restrict-plus-operands": "error",
        // TODO Плохо работает, правило про потерю области видимости, но на самом деле правило фолсит
        //  и срабатывает например при передаче в метод класса переменной с this (someFn(this.someVar))
        "@typescript-eslint/unbound-method": "off",

        // В стандартном есть "@typescript-eslint/array-type": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array"
            }
        ],

        // eslint правила, отсутствуют в eslint:recommended

        //запрещает foo = doSomething(), val;
        "no-sequences": "error",// более строгий аналог: no-restricted-syntax": ["error", "SequenceExpression"]

        // Запрещает var foo = "Copyright \251";, дополняет no-octal из eslint:recommended
        "no-octal-escape": "error",

        // String(someValue); вместо new String(someValue);
        "no-new-wrappers": "error",

        // Запрещает arguments.caller and arguments.callee
        "no-caller": "error",

        // var person = new Person();  вместо  var person = new Person;
        "new-parens": "error",

        //  var x = y || z; вместо var x = y | z;
        "no-bitwise": "error",

        // function foo(bar) {var baz = bar;} вместо function foo(bar) {bar = 13;}
        "no-param-reassign": "error",

        // Обязательное использование hasOwnProperty в for (key in foo) {}
        "guard-for-in": "error",

        // Необязательно, но должно улучшить читабельность код
        "one-var": [
            "error",
            "never" // запрещает var bar, baz;   const bar = true, baz = false;
        ],

        // Reports use of a deprecated name, as indicated by a JSDoc block with a @deprecated tag or TomDoc Deprecated: comment.
        "import/no-deprecated": "error",

        // import _ from 'foo' вместо import 'foo'
        "import/no-unassigned-import": "error",

        "arrow-body-style": [
            "error",
            "as-needed", // let foo = () => 0; и let foo = () => { bar(); };
            {
                "requireReturnForObjectLiteral": true // let foo = () => { return { bar: 0 }; };
            }
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error',  {"args": "after-used"}],


        /*******************************************************************************************************
         * Отключенные правила, список может приготится, если будем импортировать готовые конфиги
         *******************************************************************************************************/

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
        "import/no-extraneous-dependencies": "off",
        "import/no-internal-modules": "off",
        "max-classes-per-file": "off",
        "no-invalid-this": "off",
        "no-multi-str": "off",
        "no-null/no-null": "off",
        "radix": "off",
        "valid-typeof": "off",

        /*******************************************************************************************************
         * Правила, которые будут добавлены в будущем, список еще редактируется
         *******************************************************************************************************/
        /*
        "@typescript-eslint/member-ordering": "error", // необходимо аккуратно настроить или перенести кистомное правило
        "no-underscore-dangle": [ // нужно перенести кастомное проавило orthodox-getter-and-setter
            "error",
            {
                "allowAfterThis": true
            }
        ],
        */

        /*******************************************************************************************************
         * В tslint было, но кажется не нужным:
         *******************************************************************************************************/
        /*
            "no-restricted-imports": "error",

            // В Cybsi например есть export default
            "import/no-default-export": "error",

            // Запрещает использование типов в jsdoc, например: @param {number} foo
            "jsdoc/no-types": "error",
        */
    }
}
