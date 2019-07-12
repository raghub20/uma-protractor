const { config, getBrowserStackConfig } = require('./protractor.common');
const protractor = require('protractor');

const baseConfig = Object.assign({}, config);

// Using Browserstack local to more easily traverse firewalls.
const browserstack = require('browserstack-local');

exports.config = Object.assign(config, {
  args: ['-browserTimeout=300'],
  allScriptsTimeout: 300000,
  getPageTimeout: 300000,
  browserstackUser: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  browserstackKey: process.env.BROWSERSTACK_KEY || 'BROWSERSTACK_KEY',
  params: {
    login_page_url: '',
    app_base: '',
    useMockedApi: false
  },
  capabilities: {
    'browserstack.local': true,
    'browserstack.debug': true,
    'browserstack.networkLogs' : true,
    'browserstack.console': 'info',
    name: 'Win10Chrome-1280x1024',
    os : 'Windows',
    os_version : '10',
    browserName: 'Chrome',
    browser_version: '72.0',
    acceptSslCerts: true,
    resolution : '1280x1024',
    project: 'New Angular App',
    build: process.env.BUILD_NUMBER || 'local_dev',
    // For the reporting plugin:
    metadata: {
      device: 'Win10Chrome-1280x1024',
      platform: {
          name: 'windows',
          version: '10'
      }
    }
  },
  beforeLaunch: async() => {
    console.log("Connecting local...");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      const localConfig = getBrowserStackConfig();
      exports.bs_local.start(localConfig, function(error) {
        if (error) {
          try {
            // Try to avoid leaving a hanging instance of BS local if things
            // went wrong, e.g. credentials aren't working
            exports.bs_local.stop(resolve);
          } catch (err) { }
          return reject(error);
        }
        console.log('Connected. Now testing...');
        resolve();
      });
    });
  },
  // Code to stop browserstack local after end of test
  afterLaunch: async() => {
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  },
  onCleanUp: async() => {
    await baseConfig.onCleanUp();
  },
  onPrepare: async() => {
    await baseConfig.onPrepare();
  }
});
