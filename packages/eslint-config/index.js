const baseConfig = require('./base');
const loadCore = require('./utils/load-core');
const loadPlugins = require('./utils/load-plugins');

module.exports = baseConfig;

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

