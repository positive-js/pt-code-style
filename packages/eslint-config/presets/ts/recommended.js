module.exports = {
    plugins: [
        "eslint-plugin-rxjs",
        "@typescript-eslint/eslint-plugin"
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        "plugin:rxjs/recommended",
        'plugin:@angular-eslint/ng-cli-compat',
        "plugin:@angular-eslint/recommended",
        'plugin:@angular-eslint/template/process-inline-templates',
        // TODO включить, после если не будет проблем
        // 'plugin:compat/recommended',
        // 'plugin:import/errors',
        // 'plugin:import/warnings',
        // 'plugin:import/typescript',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ]
}
