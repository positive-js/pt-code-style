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
        if (!baseConfig.plugins) {
            baseConfig.plugins = [];
        }
        baseConfig.plugins.push(moduleName);
        if (preset.extends) {
            if (!baseConfig.extends) {
                baseConfig.extends = [];
            }
            baseConfig.extends = [...baseConfig.extends, ...preset.extends];
        }
        if (preset.rules) {
            if (!baseConfig.rules) {
                baseConfig.rules = {};
            }
            Object.assign(baseConfig.rules, preset.rules);
        }
        if (preset.settings) {
            if (!baseConfig.settings) {
                baseConfig.settings = {};
            }
            Object.assign(baseConfig.settings, preset.settings);
        }
    });
}

