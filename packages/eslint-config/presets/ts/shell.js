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
                "eslint-plugin-rxjs",
                "@typescript-eslint/eslint-plugin"
            ],
            extends: [

            ],
            env: {
                browser: true
            },
            rules: {}
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
