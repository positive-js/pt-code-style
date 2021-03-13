const shell = require('./presets/shell');

const tsOverrides = {
    extends: [
        './presets/ts/all'
    ]
}

module.exports = shell(tsOverrides);
