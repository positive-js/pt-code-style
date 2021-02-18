
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

no-unsupported-browser-code - плагин "plugin:compat/recommended"

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
"prefer-array-literal": true, Правило из плагина "https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md"
"prefer-method-signature": true, Правило из плагина "https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md"
"promise-must-complete": true, Правило из плагина "https://github.com/j-f1/eslint-plugin-desktop/blob/master/docs/rules/promise-must-complete.md"
"react-iframe-missing-sandbox": true, Над правилом ведется работа здесь "https://github.com/yannickcr/eslint-plugin-react/pull/2753/commits/30a29853cefed9abc38258f353306d09d678f26e"
"switch-final-break": true, Над правилом ведется работа здесь: "https://github.com/eslint/eslint/pull/12094"
}
```
