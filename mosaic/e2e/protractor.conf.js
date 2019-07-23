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
        '--headless',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-extensions'
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
