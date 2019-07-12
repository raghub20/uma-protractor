const { config } = require('./protractor.common');

const baseConfig = Object.assign({}, config);

/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/

exports.config = Object.assign(config, {

  directConnect: true,

  params: {
    login_page_url: '',
    useMockedApi: false
  },

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--disable-gpu',
        '--headless',
        '--no-sandbox',
        '--remote-debugging-port=9222',
        '--remote-debugging-address=0.0.0.0',
        '--disable-dev-shm-usage'
      ]
    },
  },

  onCleanUp: () => {
    baseConfig.onCleanUp();

    // TODO: Put any desired custom cleanup code here.
  },

  onPrepare: () => {
    baseConfig.onPrepare();

    browser.params['rootUrl'] = browser.baseUrl + '/' + browser.params.app_base;

    // Maximize the browser before executing the feature files
    return browser.manage().window().maximize();
  }
});
