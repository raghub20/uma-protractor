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
            '--disable-gpu',
            '--headless',
            '--no-sandbox',
            '--remote-debugging-port=9222',
            '--remote-debugging-address=0.0.0.0',
            '--disable-dev-shm-usage'
          ]
        }
    },
    {
      browserName: 'firefox',
      firefoxOptions: {
        args: ['--headless',
        '--no-sandbox'], 
        //binary: "/usr/local/firefox/bin/firefox",
      },
      'moz:firefoxOptions': {
        args: [ '--headless',
        '--no-sandbox'], //node_modules/firefox
        //binary: "/usr/local/firefox/bin/firefox",
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
