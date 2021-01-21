# PT Rules

Правила линтинга для frontend проектов Positive Technologies.

## Подключение к проекту
Установите пакеты
```
yarn add -D @ptsecurity/prettier-config-new @ptsecurity/eslint-config-new @ptsecurity/stylelint-config-new
```

Настройти конфигурацию в проекте:

[Настройка Eslint](packages/eslint-config/README.md)

[Настройка Prettier](packages/prettier-config/README.md)

[Настройка Stylelint](packages/stylelint-config/README.md)

## Настройка Webstorm
**Prettier**:
Run for files: {**/*,*}.{scss,json}

**Stylelint**: 
Enable

**Eslint**: 
Automatic eslint configuration;
Run eslint --fix on save

## Начало работы
```lerna bootstrap```
