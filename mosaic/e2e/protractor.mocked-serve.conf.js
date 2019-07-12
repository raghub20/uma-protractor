/* Used for serving mocked data website */

const config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    '../e2e/src/features/**/*.feature' // Specs are ignored but must exist
  ],
  cucumberOpts: {
    require: ['../e2e/src/support/setup-serve.ts', '../e2e/src/step_definitions/**/*.steps.ts'],  // Require setup and step definition files
    ignoreUncaughtExceptions: true, // Ignore code exceptions in step files
    strict: false, // Ignore undefined or pending steps
    'dry-run': true // Don't execute steps
  }
};

exports.config = Object.assign(config, {
  params: {
    login_page_url: '',
    app_base: '',
    useMockedApi: true
  },
  directConnect: true,
  capabilities: {
    browserName: 'chrome', // One capability must be defined even if tests are skipped
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
  onCleanUp: async() => {
    return new Promise((resolve) => {
      console.log('\x1b[33m%s\x1b[0m', '\nPress enter key to stop server...')
      process.stdin.once('data', () => { // Wait for keypress in console before shutting down
        resolve();
      });
    });
  },
  onPrepare: async() => {
    require('ts-node').register({ project: 'e2e/src/tsconfig.json'}); // Ensure ts-node uses our custom tsconfig
  }
});
