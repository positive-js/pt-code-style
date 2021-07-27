module.exports = {
    rules: {
        // enforce camelcase naming convention
        // https://eslint.org/docs/rules/camelcase
        camelcase: "warn",

        // enforce consistent naming when capturing the current execution context
        // https://eslint.org/docs/rules/consistent-this
        "consistent-this": ["warn", "that", "self", "me"]
    },

    overrides: [
        {
            files: ["*.ts"],
            rules: {
                // Enforces naming conventions for everything across a codebase [types]
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
                "@typescript-eslint/naming-convention": "warn",
            },
        },
    ],
};
