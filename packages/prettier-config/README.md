# Prettier config

## Подключение

.prettierrc.js проекта должен выглядеть так:
```js
module.exports = {
    ...require('@ptsecurity/prettier-config'),
    // правила, которые переопределяют / дополняют базовый конфиг
};
```
