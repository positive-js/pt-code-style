module.exports = {
    // max 120 characters per line
    printWidth: 120,
    // use spaces instead of indentations
    useTabs: false,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: "none",
    // lf for newline
    endOfLine: "lf",
    overrides: [
        {
            files: '*.html',
            options: {
                parser: 'angular',
                htmlWhitespaceSensitivity: 'ignore'
            }
        },
        {
            files: '*.scss',
            options: {
                parser: 'scss',
                singleQuote: false
            }
        },
        {
            files: '*.ts',
            options: {
                parser: 'babel-ts'
            }
        }
    ]
};
