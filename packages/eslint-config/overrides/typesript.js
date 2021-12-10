const loadCore = require("../utils/load-core");
const loadPlugins = require("../utils/load-plugins");

const baseConfig = {
    files: ['*.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module'
    }
}

loadCore(baseConfig, [
    'best-practices',
    'deprecated',
    'possible-errors',
    'variables',
    'naming',
    'restricted-imports'
]);

loadPlugins(baseConfig, [
    'array-func',
    'eslint-comments',
    'import',
    'typescript-eslint',
    'angular-eslint',
    'rxjs',
    'prefer-arrow',
    'prettier'
]);

module.exports = baseConfig;
