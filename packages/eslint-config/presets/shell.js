module.exports = function (tsOverrides) {
    return {
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
