
# Правила, которые не удалось перенести
```json
"chai-prefer-contains-to-index-of": true,
"chai-vague-errors": true,
"encoding": true, - кажется ненужным
"import-name": true,
"informative-docs": true,
"jquery-deferred-must-complete": true,
"match-default-export-name": true,
"mocha-no-side-effect-code": true,
"mocha-unneeded-done": true,
"no-cookies": true,
"no-disable-auto-sanitization": true,
"no-document-write": true,
"no-dynamic-delete": true,
"no-function-constructor-with-string-args": true, deprecated в tslint, аналог не планируется
"no-http-string": [
true,
"http://www.example.com/?.*",
"http://localhost:?.*"
],
"no-inferred-empty-object-type": true,
"no-inner-html": true,
"no-jquery-raw-elements": true,
"no-reserved-keywords": true, deprecated в tslint, аналог не планируется
"no-string-based-set-immediate": true,
"no-string-based-set-interval": true,
"no-string-based-set-timeout": true,
"no-typeof-undefined": true,
"no-unnecessary-bind": true, deprecated в tslint, аналог не планируется
"no-unnecessary-callback-wrapper": true,
"no-unnecessary-local-variable": true,
    "no-unnecessary-override": true,
"no-useless-files": true,

TODO: проверить правила ниже 
"non-literal-fs-path": true,
"prefer-while": true,
"react-a11y-anchors": true,
"react-a11y-aria-unsupported-elements": true,
"react-a11y-event-has-role": true,
"react-a11y-image-button-has-alt": true,
"react-a11y-img-has-alt": true,
"react-a11y-input-elements": true,
"react-a11y-lang": true,
"react-a11y-meta": true,
"react-a11y-no-onchange": true,
"react-a11y-props": true,
"react-a11y-proptypes": true,
"react-a11y-required": true,
"react-a11y-role": true,
"react-a11y-role-has-required-aria-props": true,
"react-a11y-role-supports-aria-props": true,
"react-a11y-tabindex-no-positive": true,
"react-a11y-titles": true,
"react-anchor-blank-noopener": true,
"react-no-dangerous-html": true,
"react-this-binding-issue": true,
"react-unused-props-and-state": true,
"underscore-consistent-invocation": true,
"use-named-parameter": true,
"use-simple-attributes": true
}
```

# Сделанные замены
member-ordering-advanced - оставлен стандартный member-ordering из typescript-eslint

"no-delete-expression" - "no-delete-var"

"no-document-domain" - "no-restricted-syntax"

"no-unsupported-browser-code" - плагин "plugin:compat/recommended"

"id-match": "error", не добавлен, т.к. правило дублирует @typescript-eslint/naming-convention

"prefer-array-literal": "error", заменен @typescript-eslint/array-type: ["error",{"default": "array"}],

Миграция проводилась по https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md#tslint-microsoft-contrib-rules

# Планируемые замены
```json
"blank-lines": [true, { "after-imports": 2 }], Правило из плагина "https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md"
"insecure-random": true, TODO: рассмотреть кастомное правило: "https://github.com/desktop/desktop/blob/development/eslint-rules/insecure-random.js"
"mocha-avoid-only": true, Правило из плагина  "https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md"
"no-exec-script": true, TODO: Заменить на "https://eslint.org/docs/rules/no-restricted-syntax"
"non-literal-require": true, Правило из плагина "https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-require"
"number-literal-format": true, eslint no-floating-decimal: "error"
"orthodox-getter-and-setter": true, аналога нет, нужно переносить кастомное правило "https://github.com/positive-js/tslint-config/blob/master/src/rules/orthodoxGetterAndSetterRule.ts"
"possible-timing-attack": true, Правило из плагина "https://github.com/nodesecurity/eslint-plugin-security#detect-possible-timing-attacks"
"promise-must-complete": true, Правило из плагина "https://github.com/j-f1/eslint-plugin-desktop/blob/master/docs/rules/promise-must-complete.md"
"react-iframe-missing-sandbox": true, Над правилом ведется работа здесь "https://github.com/yannickcr/eslint-plugin-react/pull/2753/commits/30a29853cefed9abc38258f353306d09d678f26e"
"switch-final-break": true, Над правилом ведется работа здесь: "https://github.com/eslint/eslint/pull/12094"
}
```

# Правила, не внесенные в index.js из-за их наличия в подключенных конфигах:

Стандартный конфиг
https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/all.ts

```json
{
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/method-signature-style": "error"
}
```

eslint:recommended

```json
{
    "no-sparse-arrays": "error",
    "no-unsafe-finally": "error",
    "no-duplicate-case": "error",
    "no-unused-labels": "error",
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-empty": "error",
    "no-fallthrough": "error",
    "no-invalid-regexp": "error",
    "no-octal": "error",
    "no-redeclare": "error",
}
```

@typescript-eslint/recommended
https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts

```json
{
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/ban-types": [
        "error",
        {
            "types": {
                "Object": {
                    "message": "Avoid using the `Object` type. Did you mean `object`?"
                },
                "Function": {
                    "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                },
                "Boolean": {
                    "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                },
                "Number": {
                    "message": "Avoid using the `Number` type. Did you mean `number`?"
                },
                "String": {
                    "message": "Avoid using the `String` type. Did you mean `string`?"
                },
                "Symbol": {
                    "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                }
            }
        }
    ],
}
```

