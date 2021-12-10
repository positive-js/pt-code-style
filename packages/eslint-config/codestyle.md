# CodeStyle

## 1. API

### 1.1 API responses

Ответы API должны быть нормализованы и удобны для использования.
Если у вас есть какие-то проблемы с форматом ответа, пожалуйста,
обсудите это со своим бэкен разработчиком.

На стороне клиента не должно быть никакой обработки нормализации и hardcode!

```diff
# Bad
- some_field: number;
- AnotherField: string;
- "yet-one-field": string[];

# Good
+ someField: number;
+ anotherField: string;
+ yetOneField": string[];
```
