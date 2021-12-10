# Eslint config

## Установка

```bash
npm install eslint @ptsecurity/eslint-config --save-dev
```

## Использование

.eslintrc.js проекта должен выглядеть так:
```js
module.exports = {
    extends: '@ptsecurity/eslint-config'
}
```

Можно подключать наборы правил, или конфигурации для плагинов отдельно
```js
// .eslintrc.js
module.exports = {
    extends: [
        '@ptsecurity/eslint-config/base',
        '@ptsecurity/eslint-config/core/best-practices',
        '@ptsecurity/eslint-config/plugins/typescript-eslint',
        '@ptsecurity/eslint-config/plugins/import'
    ]
};
```
## Описание
Пакет содержит конфигурацию eslint, подключаемую в проект.

## Изменение конфигурации
Стандартные конфигурации для js и ts находятся в `overrides/`.
Собственные конфигурации можно создавать по аналогии с уже имеющимися стандартными,
используя утилиты `load-core`, `load-plugins`, находящиеся в `utils`.

Так же можно подключить частичные наборы правил (`core`), либо конфигурации для плагинов (`plugins`).
За основу можно взять базовый конфиг `base.js`

## Философия
* Конфигурация правил должна требовать минимальных усилий, работать из коробки.
* Линтинг не должен мешать разработчику. Например, не давать пройти локальной сборке или прервать сборку в CI.
* `Errors` должны указывать только на недопустимый или сломанный код.
* `Warrnings` должны указывать только на потенциальные ошибки или сбивающий с толку код.
* Все варианты форматирования и стилистики должны автоматически определяться инструментами.

## Plugins
### Перечень используемых плагинов
В данный момент в конфигурацию включены следующие плагины:
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [array-func](https://github.com/freaktechnik/eslint-plugin-array-func)
- [eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [import](https://github.com/import-js/eslint-plugin-import)
- [angular-eslint](https://github.com/angular-eslint/angular-eslint)
- [rxjs](https://www.npmjs.com/package/eslint-plugin-rxjs)
- [prefer-arrow](https://github.com/TristonJ/eslint-plugin-prefer-arrow)
- [prettier](https://www.npmjs.com/package/eslint-plugin-prettier)

## Полезные ссылки
Вы можете расширять стандартную конфигурацию локально плагинами, вот некоторые из них:

### Code Quality
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

### Languages
Следующие плагины расширяют ESLint для работы с файлами json и lint JavaScript, содержащимися в HTML и MarkDown:

- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html)
- [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)
- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)

### Library Plugins
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

