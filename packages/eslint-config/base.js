const shell = require('./presets/shell');

const tsOverrides = {
    extends: [
        './presets/ts/base'
    ]
}

module.exports = shell(tsOverrides);
