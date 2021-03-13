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

    
