module.exports = {
    rules: {
        "prefer-arrow/prefer-arrow-functions": [
            "warn",
            {
                "disallowPrototype": true,
                "singleReturnOnly": true,
                "classPropertiesAllowed": false,
                "allowStandaloneDeclarations": true
            }
        ]
    }
}
