const { config } = require('./protractor.common');

const baseConfig = Object.assign({}, config);

// Override the base required files.
config.cucumberOpts.require = ['../cucumber/**/support/setup.ts', '../cucumber/**/support/*.integration.ts', '../cucumber/**/*.step.ts'];

/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/

exports.config = Object.assign(config, {

  localSeleniumStandaloneOpts: {
    jvmArgs: [ '-Dwebdriver.ie.driver=./node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.141.0.exe' ]
  },

  params: {
    login_page_url: '',
    app_base: '',
    useMockedApi: false
  },

  capabilities: {
    browserName: 'internet explorer',
    "ie.forceCreateProcessApi": true,
    "ie.browserCommandLineSwitches": "-private",
    "ie.ensureCleanSession": "true",
    metadata: {
      device: 'Windows Desktop',
      platform: {
          name: 'windows'
      }
    }
},

onCleanUp: async() => {
  await baseConfig.onCleanUp();
},


onPrepare: async() => {
  await baseConfig.onPrepare(); // Skip starting of json-server
}
});
