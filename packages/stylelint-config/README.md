# Stylelint config

## Подключение

.stylelintrc.js проекта должен выглядеть так:
```js
module.exports = {
   extends: '@ptsecurity/stylelint-config'
}
```

## Настройка IDE
Конфигурация stylelint содержит [stylelint-prettier plugin](https://github.com/prettier/stylelint-prettier). 
Поэтому, для автоматического форматирования файлов стилей, а так же для сортировки свойств стилей, 
в IDE нужно активировать prettier для файлов стилей.

Prettier: Run for files: {/,}.{scss,json}

[x] Fix on Save
