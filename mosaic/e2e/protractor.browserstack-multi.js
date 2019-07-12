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
  maxSessions: 1,
  commonCapabilities: {
    'browserstack.local': true,
    'browserstack.debug': true,
    'browserstack.networkLogs' : true,
    'browserstack.console': 'info',
    build: process.env.BUILD_NUMBER || 'local_dev',
    project: 'New Angular App',
    acceptSslCerts: true
  },
  multiCapabilities: [
    {
      name: 'MacSafari-1280x1024',
      os : 'OS X',
      os_version : 'Mojave',
      browserName: 'Safari',
      browser_version: '12.0',
      resolution : '1280x1024',
      metadata: {
        device: 'MacSafari-1280x1024',
        platform: {
            name: 'osx',
            version: '10.14'
        }
      }
    },
    {
      name: 'MobileChrome',
      device : 'Google Pixel 2',
      real_mobile : 'true',
      os_version : '9.0',
      browserName: '',
      metadata: {
        device: 'MobileChrome',
        platform: {
            name: 'android',
            device : 'Google Pixel 2',
            version: '9.0'
        }
      }
    },
    {
      name: 'MobileSafari',
      device: 'iPhone 8',
      real_mobile : 'true',
      os_version : '12.1',
      browserName: '',
      metadata: {
        device: 'MobileSafari',
        platform: {
            name: 'ios',
            device: 'iPhone 8',
            version: '12.1'
        }
      }
    },
    {
      name: 'Win10Edge-1280x1024',
      os : 'Windows',
      os_version : '10',
      browserName: 'Edge',
      browser_version: '18.0',
      resolution : '1280x1024',
      metadata: {
        device: 'Win10Edge-1280x1024',
        platform: {
            name: 'windows',
            version: '10'
        }
      }
    },
    {
      name: 'Win10Chrome-1280x1024',
      os : 'Windows',
      os_version : '10',
      browserName: 'Chrome',
      browser_version: '72.0',
      resolution : '1280x1024',
      metadata: {
        device: 'Win10Chrome-1280x1024',
        platform: {
            name: 'windows',
            version: '10'
        }
      }
    },
    {
      name: 'Win7IE11-1280x1024',
      os : 'Windows',
      os_version : '7',
      browserName: 'IE',
      browser_version: '11.0',
      resolution : '1280x1024',
      metadata: {
        device: 'Win7IE11-1280x1024',
        platform: {
            name: 'windows',
            version: '7'
        }
      }
    },
    {
      name: 'Win7Firefox-1280x1024',
      os : 'Windows',
      os_version : '7',
      browserName: 'Firefox',
      browser_version: '63.0',
      resolution : '1280x1024',
      metadata: {
        device: 'Win7Firefox-1280x1024',
        platform: {
            name: 'windows',
            version: '7'
        }
      }
    }
  ],
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
  afterLaunch: async() => {
    // Code to stop browserstack local after end of test
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

exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
