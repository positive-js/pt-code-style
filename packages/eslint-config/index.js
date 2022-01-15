const baseConfig = require('./base');
const html = require('./overrides/html');
const javascript = require('./overrides/javascript');
const typescript = require('./overrides/typescript');

module.exports = {
    ...baseConfig,
    overrides: [typescript, javascript, html]
};
