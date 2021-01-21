module.exports = {
    "root": true,
    "ignorePatterns": ["projects/**/*"],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "overrides": [
        {
            "files": ["*.ts"],
            "parserOptions": {
                "project": ["tsconfig.json", "e2e/tsconfig.json"],
                "createDefaultProgram": true
            },
            "extends": [
                "plugin:@angular-eslint/ng-cli-compat",
                "plugin:@angular-eslint/template/process-inline-templates",
                "plugin:compat/recommended",
                "prettier/@typescript-eslint",
                "plugin:prettier/recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript"
            ],
            "env": {
                "browser": true
            },

            "rules": {
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        "type": "element",
                        "prefix": "app",
                        "style": "kebab-case"
                    }
                ],
                "@angular-eslint/directive-selector": [
                    "error",
                    {
                        "type": "attribute",
                        "prefix": "app",
                        "style": "camelCase"
                    }
                ],
                "sort-imports": [
                    "error",
                    {
                        "allowSeparatedGroups": true
                    }
                ],
                "import/order": ["error", { "newlines-between": "always" }],
                "max-lines-per-function": ["error", 100],
                "naming-convention": [
                    "error",
                    {
                        "type": "default",
                        "format": "camelCase",
                        "leadingUnderscore": "forbid",
                        "trailingUnderscore": "forbid"
                    },
                    {
                        "type": "variable",
                        "format": ["camelCase", "UPPER_CASE"]
                    },
                    {
                        "type": "function",
                        "format": ["strictCamelCase"]
                    },
                    {
                        "type": "type",
                        "format": "StrictPascalCase"
                    },
                    {
                        "type": "enum",
                        "format": "StrictPascalCase"
                    },
                    {
                        "type": "parameter",
                        "modifiers": "unused",
                        "leadingUnderscore": "allow"
                    },
                    {
                        "type": "parameter",
                        "format": "strictCamelCase"
                    },
                    {
                        "type": "enumMember",
                        "format": ["UPPER_CASE", "PascalCase"]
                    },
                    {
                        "type": "property",
                        "format": ["camelCase", "UPPER_CASE"]
                    },
                    {
                        "type": "property",
                        "modifiers": "private",
                        "leadingUnderscore": "allow"
                    },
                    {
                        "type": "class",
                        "modifiers": "abstract",
                        "prefix": "Abstract"
                    },
                    {
                        "type": "class",
                        "format": "StrictPascalCase"
                    },
                    {
                        "type": "interface",
                        "format": "StrictPascalCase",
                        "prefix": "I"
                    }
                ],
                "no-restricted-syntax": ["error", "WithStatement", "BinaryExpression[operator='in']"],
                "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
                "no-empty-function": ["error", { "allow": ["constructors"] }]
            }
        },
        {
            "files": ["*.html"],
            "extends": ["plugin:@angular-eslint/template/recommended"],
            "rules": {}
        }
    ]
}
