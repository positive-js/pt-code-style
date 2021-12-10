/**
 * Настройка пресетов правил (./core)
 */
module.exports = (baseConfig, configs) => {
    configs.forEach((name) => {
        const rules = require(`../core/${name}`).rules;
        if (!baseConfig.rules) {
            baseConfig.rules = {};
        }
        Object.assign(baseConfig.rules, rules);
    });
}

