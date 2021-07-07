const baseConfig = require ('./nightwatch.conf');

const config = {
    ...baseConfig,
    webdriver: {
        'start_process' :false,
        'host' : 'hub-cloud.browserstack.com',
        'port' : 80
    },
};
config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;
config.test_settings.default.desiredCapabilities = [''];



config.test_settings.firefox = {
    desiredCapabilities: {
        'browser': 'firefox',
        'browser_version': 'latest',
        'os': 'Windows',
        'os_version': '10',
        'build': 'browserstack-build-1',
        'name': 'Parallel test',
    }
};

for (var i in config.test_settings){
    var test_setting = config.test_settings[i];
    test_setting['selenium_host'] = config.webdriver.host;
    test_setting['selenium_port'] = config.webdriver.port;

}
module.exports = {config}
