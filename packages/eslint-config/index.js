const baseConfig = require('./base');
const typescript = require('./overrides/typesript');
const javascript = require('./overrides/javascript');
const html = require('./overrides/html');

module.exports = {
    ...baseConfig,
    overrides: [
        typescript,
        javascript,
        html
    ]
};
