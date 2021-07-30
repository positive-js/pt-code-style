const baseConfig = require('./base');

module.exports = {
    ...baseConfig,
    overrides: [
        {
            files: '*.scss',
            options: {
                parser: 'scss',
                singleQuote: true
            }
        }
    ]
}
