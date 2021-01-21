
# Правила, которые не удалось перенести
```json
"blank-lines": [true, { "after-imports": 2 }],
"chai-prefer-contains-to-index-of": true,
"chai-vague-errors": true,
"encoding": true,
"import-name": true,
"informative-docs": true,
"insecure-random": true,
"jquery-deferred-must-complete": true,
"match-default-export-name": true,
"mocha-avoid-only": true,
"mocha-no-side-effect-code": true,
"mocha-unneeded-done": true,
"no-cookies": true,
"no-disable-auto-sanitization": true,
"no-document-write": true,
"no-dynamic-delete": true,
"no-exec-script": true,
"no-function-constructor-with-string-args": true,
"no-http-string": [
true,
"http://www.example.com/?.*",
"http://localhost:?.*"
],
"no-inferred-empty-object-type": true,
"no-inner-html": true,
"no-jquery-raw-elements": true,
"no-reserved-keywords": true,
"no-string-based-set-immediate": true,
"no-string-based-set-interval": true,
"no-string-based-set-timeout": true,
"no-typeof-undefined": true,
"no-unnecessary-bind": true,
"no-unnecessary-callback-wrapper": true,
"no-unnecessary-local-variable": true,
"no-unnecessary-override": true,
"no-useless-files": true,

TODO: проверить правила ниже 
"non-literal-fs-path": true,
"non-literal-require": true,
"number-literal-format": true,
"orthodox-getter-and-setter": true,
"possible-timing-attack": true,
"prefer-array-literal": true,
"prefer-method-signature": true,
"prefer-while": true,
"promise-must-complete": true,
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
"react-iframe-missing-sandbox": true,
"react-no-dangerous-html": true,
"react-this-binding-issue": true,
"react-unused-props-and-state": true,
"switch-final-break": true,
"underscore-consistent-invocation": true,
"use-named-parameter": true,
"use-simple-attributes": true
}
```

# Замены
member-ordering-advanced - оставлен стандартный member-ordering из typescript-eslint

"no-delete-expression" - "no-delete-var"

"no-document-domain" - "no-restricted-syntax"

no-unsupported-browser-code - плагин "plugin:compat/recommended"

Миграция проводилась по https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md#tslint-microsoft-contrib-rules
