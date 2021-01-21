module.exports = {
    printWidth: 120,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: "none",
    overrides: [
        {
            files: '*.html',
            options: {
                parser: 'angular',
                htmlWhitespaceSensitivity: 'ignore',
            },
        },
        {
            files: '*.scss',
            options: {
                parser: 'scss',
                singleQuote: false,
            },
        },
        {
            files: '*.ts',
            options: {
                parser: 'babel-ts',
            },
        },
    ],
};
