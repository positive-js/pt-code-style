module.exports = function (tsOverrides) {
    return {
        root: true,
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
                        'tsconfig.json'
                    ],
                    createDefaultProgram: true
                },
                env: {
                    browser: true
                },
                ...tsOverrides
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
}
