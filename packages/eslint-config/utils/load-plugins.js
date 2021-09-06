/**
 * Настройка плагинов (./plugins)
 * @type {{[p: string]: string}}
 */
const moduleNames = {
    ['typescript-eslint']: '@typescript-eslint',
    ['angular-eslint']: '@angular-eslint'
};

module.exports = (baseConfig, plugins) => {
    plugins.forEach((name) => {
        const preset = require(`../plugins/${name}`);
        const moduleName = moduleNames[name] || name;
        // имя плагина должно совпадать с именем модуля
        baseConfig.plugins.push(moduleName);
        if (preset.extends) {
            baseConfig.extends = [...baseConfig.extends, ...preset.extends];
        }
        if (preset.rules) {
            Object.assign(baseConfig.rules, preset.rules);
        }
        if (preset.settings) {
            Object.assign(baseConfig.settings, preset.settings);
        }
    });
}

