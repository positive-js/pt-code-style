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
                ]
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
