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
  directConnect: true,
  maxSessions: 1, // Cannot run mock in parallel currently due to port overlap
  params: {
    login_page_url: '',
    app_base: '',
    useMockedApi: true
  },
  commonCapabilities: {
    project: 'New Angular App'
  },
  multiCapabilities: [
    {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--headless',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--disable-extensions'
          ]
        }
    },
    {
        browserName: 'firefox',
        firefoxOptions: {
          args: ['--headless']
        },
        'moz:firefoxOptions': {
          args: [ '--headless' ]
        }
    }
  ],
  onCleanUp: async() => {
    await baseConfig.onCleanUp();
  },
  onPrepare: async() => {
    await baseConfig.onPrepare();
  }
});
