/**
 * Настройка пресетов правил (./core)
 */
module.exports = (baseConfig, configs) => {
    configs.forEach((name) => {
        const rules = require(`../core/${name}`).rules;

        Object.assign(baseConfig.rules, rules);
    });
}

