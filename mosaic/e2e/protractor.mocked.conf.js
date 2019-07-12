const { config } = require('./protractor.common');

/**
 * Create a snapshot of the base config so that
 * we can simulate calling base methods on override.
 */
const baseConfig = Object.assign({}, config);

/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/

exports.config = Object.assign(config, {

  // SELENIUM_PROMISE_MANAGER: false,

  directConnect: true,

  params: {
    login_page_url: '',
    app_base: '',
    useMockedApi: true
  },

  capabilities: {
    // Chrome
    browserName: 'chrome',
    chromeOptions: {
      args: [
        //'--headless',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-extensions'
      ]
    }
    // Firefox
    // browserName: 'firefox',
    // firefoxOptions: {
    //   args: ['--headless']
    // },
    // 'moz:firefoxOptions': {
    //   args: [ '--headless' ]
    // }
  },

  onCleanUp: async() => {
    await baseConfig.onCleanUp();
  },

  onPrepare: async() => {
    await baseConfig.onPrepare();
  }
});
