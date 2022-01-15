const loadCore = require('../utils/load-core');
const loadPlugins = require('../utils/load-plugins');

const baseConfig = {
    files: ['*.js']
};

loadCore(baseConfig, ['best-practices', 'deprecated', 'possible-errors', 'variables', 'naming', 'restricted-imports']);

loadPlugins(baseConfig, ['array-func', 'eslint-comments', 'import', 'prefer-arrow', 'prettier']);

module.exports = baseConfig;
