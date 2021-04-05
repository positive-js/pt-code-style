# Prettier config

## Подключение

.prettirrc.js проекта должен выглядеть так:
```js
module.exports = {
    ...require('@ptsecurity/prettier-config-new'),
    // правила, которые переопределяют / дополняют базовый конфиг
};
```

