const baseConfig = require('./base');
const typescript = require('./overrides/typesript');
const javascript = require('./overrides/javascript');

module.exports = {
    ...baseConfig,
    overrides: [
        typescript,
        javascript
    ]
};
