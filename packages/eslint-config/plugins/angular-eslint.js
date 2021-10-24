module.exports = {
    extends: [
        'plugin:@angular-eslint/ng-cli-compat',
        "plugin:@angular-eslint/recommended",
        'plugin:@angular-eslint/template/process-inline-templates'
    ],
    rules: {
        '@angular-eslint/no-output-on-prefix': 'warn',
        '@angular-eslint/component-selector': 'off', // Настраивается в проекте
        '@angular-eslint/no-host-metadata-property': 'warn',
        '@angular-eslint/directive-class-suffix': 'warn',
        '@angular-eslint/no-input-rename': 'warn',
        '@angular-eslint/use-component-view-encapsulation': 'warn',
        '@angular-eslint/no-output-native': 'warn',
        '@angular-eslint/component-class-suffix': 'warn'
    }
}
