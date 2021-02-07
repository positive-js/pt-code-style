module.exports = {
    root: true,
    ignorePatterns: [
        'projects/**/*'
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx'
                ]
            }
        }
    },
    overrides: [
        {
            files: [
                '*.ts'
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: [
                    'tsconfig.json',
                    'e2e/tsconfig.json'
                ],
                createDefaultProgram: true
            },
            plugins: [
                // новые плагины
                "eslint-plugin-rxjs",
                "@typescript-eslint",
                "@typescript-eslint/tslint"
            ],
            extends: [
                'plugin:@angular-eslint/ng-cli-compat',
                'plugin:@angular-eslint/template/process-inline-templates',
                'plugin:compat/recommended',
                'plugin:import/errors',
                'plugin:import/warnings',
                'plugin:import/typescript',
                'prettier/@typescript-eslint',
                'plugin:prettier/recommended'
            ],
            env: {
                browser: true
            },
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
                'sort-imports': [
                    'error',
                    {
                        allowSeparatedGroups: true
                    }
                ],
                'import/order': [
                    'error',
                    {
                        'newlines-between': 'always'
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
                        trailingUnderscore: 'forbid',
                    },

                    {
                        selector: 'variable',
                        format: ['camelCase', 'UPPER_CASE'],
                    },
                    {
                        selector: 'function',
                        format: [
                            'strictCamelCase'
                        ]
                    },
                    {
                        selector: 'typeLike',
                        format: ['StrictPascalCase'],
                    },
                    {
                        selector: 'enum',
                        format: ['StrictPascalCase'],
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

                /*
                * Новые правила
                * */

                "@typescript-eslint/ban-types": [
                    "error",
                    {
                        "types": {
                            "Object": {
                                "message": "Avoid using the `Object` type. Did you mean `object`?"
                            },
                            "Function": {
                                "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                            },
                            "Boolean": {
                                "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                            },
                            "Number": {
                                "message": "Avoid using the `Number` type. Did you mean `number`?"
                            },
                            "String": {
                                "message": "Avoid using the `String` type. Did you mean `string`?"
                            },
                            "Symbol": {
                                "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                            }
                        }
                    }
                ],
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-empty-interface": "error",
                "@typescript-eslint/no-unused-expressions": [
                    "error",
                    {
                        "allowTernary": true,
                        "allowShortCircuit": true
                    }
                ],
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                "@typescript-eslint/no-unnecessary-qualifier": "error",
                "@typescript-eslint/prefer-literal-enum-member": "error", // enum Valid { B = 'TestStr', вместо  enum Valid { A = str,
                "max-len": [
                    "error",
                    {
                        "code": 120
                    }
                ],
                "no-shadow": [
                    "error",
                    {
                        "hoist": "all",
                        "allow": ["done", "resolve", "reject"]
                    }
                ],
                "no-sparse-arrays": "error", // запрещает var items = [,,];
                "no-template-curly-in-string": "error",
                "no-throw-literal": "error",
                "no-undef-init": "error",
                "no-unsafe-finally": "error",
                "no-void": "error",
                "no-var": "error",
                "no-eval": "error",
                "no-magic-numbers": ["error", { "ignore": [-1, 0, 1], "ignoreDefaultValues": true }],
                "no-return-await": "error",
                "no-console": [
                    "error",
                    {
                        "allow": [
                            "warn",
                            "dir",
                            "time",
                            "timeEnd",
                            "timeLog",
                            "trace",
                            "assert",
                            "clear",
                            "count",
                            "countReset",
                            "group",
                            "groupEnd",
                            "table",
                            "info",
                            "dirxml",
                            "groupCollapsed",
                            "Console",
                            "profile",
                            "profileEnd",
                            "timeStamp",
                            "context"
                        ]
                    }
                ],
                "no-duplicate-case": "error",
                "no-duplicate-imports": "error",
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

                /*
                * Отключенные правила, список может приготится, если будем импортировать готовые конфиги
                * */

                "@typescript-eslint/no-floating-promises": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-extraneous-class": "off",
                "@typescript-eslint/no-inferrable-types": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-parameter-properties": "off",
                "@typescript-eslint/no-require-imports": "off",
                "@typescript-eslint/no-unused-vars": "off",
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

                /*
                * Правила, которые будут добавлены в будущем, список еще редактируется
                */

                /* Необходимые для этих правил плагины
                * "plugins": [
                    "eslint-plugin-import",
                    "eslint-plugin-jsdoc",
                    "eslint-plugin-no-null",
                    "@typescript-eslint/tslint"
                ],*/
                /*"no-underscore-dangle": [ // возможно заменится при переносе кастомного orthodox-getter-and-setter
                    "error",
                    {
                        "allowAfterThis": true
                    }
                ],
                "no-unused-labels": "error",
                "@typescript-eslint/consistent-type-definitions": "error",
                "@typescript-eslint/member-ordering": "error", // необходимо аккуратно настроить или перенести кистомное правило
                "guard-for-in": "error",
                "one-var": [
                    "error",
                    "never" // запрещает var bar, baz;   const bar = true, baz = false;
                ],*/
                /*
                * This rule disallows awaiting a value that is not a "Thenable" (an object which has then method, such as a Promise).
                * While it is valid JavaScript to await a non-Promise-like value (it will resolve immediately), this pattern is often a programmer error,
                * such as forgetting to add parenthesis to call a function that returns a Promise.
                * */
                /*"@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/array-type": [
                    "error",
                    {
                        "default": "array"
                    }
                ],
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        "accessibility": "no-public"
                    }
                ],
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-namespace": "error",
                "no-param-reassign": "error",
                "@typescript-eslint/no-this-alias": "error",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
                "@typescript-eslint/no-unnecessary-type-arguments": "error",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/prefer-for-of": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/restrict-plus-operands": "error",
                "@typescript-eslint/unbound-method": "error",
                "@typescript-eslint/unified-signatures": "error",
                "arrow-body-style": "error",
                "id-blacklist": "error",
                "id-match": "error",
                "import/no-default-export": "error",
                "import/no-deprecated": "error",
                "import/no-unassigned-import": "error",
                "jsdoc/no-types": "error",
                "new-parens": "error",
                "no-bitwise": "error",
                "no-caller": "error",
                "no-cond-assign": "error",
                "no-constant-condition": "error",
                "no-control-regex": "error",
                "no-debugger": "error",
                "no-empty": "error",
                "no-fallthrough": "error",
                "no-invalid-regexp": "error",
                "no-new-wrappers": "error",
                "no-octal": "error",
                "no-octal-escape": "error",
                "no-redeclare": "error",
                "no-restricted-imports": "error",
                "no-sequences": "error"*/
            }
        },
        {
            files: [
                '*.html'
            ],
            extends: [
                'plugin:@angular-eslint/template/recommended'
            ],
            rules: {}
        }
    ]
}
