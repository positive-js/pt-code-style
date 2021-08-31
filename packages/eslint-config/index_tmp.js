const shell = require('./presets/shell');

const tsOverrides = {
    extends: [
        './presets/ts/recommended',
        './presets/ts/custom'
    ]
}

module.exports = shell(tsOverrides);
