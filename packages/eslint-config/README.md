# Eslint config
## Подключение

.eslintrc.js проекта должен выглядеть так:
```js
module.exports = {
    extends: '@ptsecurity/eslint-config-new'
}
```

## Описание
Пакет включает в себя разные наборы пресетов конфигураций
- base - базовый облегченный набор, сделанный для облегчения миграции tslint → eslint
- recommended - стандартный набор правил, который используется по-умолчанию и подойдет большинству проектов
- all - усиленный набор правил 

## Полезные ссылки
[Описание правил typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

## Plugins
### Перечень используемых плагинов

.....

### Code Quality

- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

### Languages
Следующие плагины расширяют ESLint для работы с файлами json и lint JavaScript, содержащимися в HTML и MarkDown:

- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html)
- [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)
- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)

### Library Plugins

Следующие пакеты:

- [eslint-plugin-fsa](https://github.com/joseph-galindo/eslint-plugin-fsa)
- [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
- [eslint-plugin-lodash-fp](https://github.com/jfmengels/eslint-plugin-lodash-fp)
- [eslint-plugin-react-redux](https://github.com/DianaSuvorova/eslint-plugin-react-redux#readme)
- [eslint-plugin-redux-saga](https://github.com/pke/eslint-plugin-redux-saga)

### Practices

Следующие плагины ESLint обеспечивают соблюдение часто встречающихся практик:

- [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind)
- [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
- [eslint-plugin-optimize-regex](https://github.com/BrainMaestro/eslint-plugin-optimize-regex)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [eslint-plugin-switch-case](https://github.com/lukeapage/eslint-plugin-switch-case)

### Security

- [eslint-plugin-no-secrets](https://github.com/nickdeis/eslint-plugin-no-secrets)
- [eslint-plugin-no-unsanitized](https://github.com/mozilla/eslint-plugin-no-unsanitized)
- [eslint-plugin-radar](https://github.com/es-joy/eslint-plugin-radar)

### Test Libraries

- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-jest-async](https://www.npmjs.com/package/eslint-plugin-jest-async)
- [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress)

