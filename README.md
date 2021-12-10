# PT Rules

Правила линтинга для frontend проектов Positive Technologies.

## Подключение к проекту
Установите пакеты
```
yarn add -D @ptsecurity/prettier-config @ptsecurity/eslint-config @ptsecurity/stylelint-config
```
Так же надо установить дополнительные зависимости ([баг](https://youtrack.ptsecurity.com/issue/UID-738)): 
```
yarn add -D eslint@^7.10.0 stylelint@^13.13.1 prettier@2.2.1 @angular-eslint/eslint-plugin eslint-plugin-rxjs @angular-eslint/eslint-plugin-template  eslint-plugin-eslint-comments eslint-plugin-array-func eslint-import-resolver-typescript @angular-eslint/builder@^4.3.0 eslint-plugin-prettier@4.0.0 stylelint-order@4.1.0 stylelint-prettier@1.2.0 @angular-eslint/template-parser@12.6.1
```

Настройте конфигурацию в проекте:

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

# Contribute 👪

Все конфигурации находятся в каталоге ```packages/```.
Мы используем [lerna](https://github.com/lerna/lerna) для управления зависимостями.

Установите зависимости для всех подпакетов с помощью yarn в корневой папке проекта.

```bash
yarn install
```
