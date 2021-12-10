const baseConfig = require('./base');

module.exports = {
    ...baseConfig,
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            options: {
                parser: 'babel-ts',
            }
        }
    ]
}
