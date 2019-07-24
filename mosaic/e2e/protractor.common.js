const { existsSync, mkdirSync, readFileSync, writeFileSync } = require('fs');
const glob = require('glob');
const cucumberJunit = require('cucumber-junit');
const cucumberReportDirectory = 'reports/e2e';
const jsonReportFile = cucumberReportDirectory + '/cucumber.json';

exports.jsonReportFile = jsonReportFile;

// Example of what a tag set can look like:
// https://stackoverflow.com/questions/41446335/protractor-config-file-cucumberopts-tags-not-taken-individually-or-ignored
let tags = process.env.CUCUMBER_TAGS || '';

const config = {
  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  specs: [
    '../e2e/src/features/**/*.feature'     // Specs here are the cucumber feature files
  ],
  // cucumber command line options
  cucumberOpts: {
    require: ['../e2e/src/support/setup.ts', '../e2e/src/step_definitions/**/*.steps.ts'],  // require setup and step definition files before executing features
    tags: tags,                           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                       // <boolean> fail if there are any undefined or pending steps
    format: 'json:' + jsonReportFile,   //["summary"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    'dry-run': false,                   // <boolean> invoke formatters without executing steps
    compiler: [ 'ts:ts-node/register' ] // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },
  plugins: [
    {
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options: {
        reportName: 'New Angular App e2e Test Suite', // customize name in top-left corner
        pageTitle: 'New Angular App e2e Test Suite',  // customize <head><title>
        automaticallyGenerateReport: true,  // particularly for the benefit of CI
        removeOriginalJsonReportFile: true, // otherwise cucumber will create a new file
        removeExistingJsonReportFile: true, // avoid stale results, especially when switching profiles.
        displayDuration: true // Helpful to have step and overall test duration statistics
      }
    }
  ],
  onPrepare: async() => {
    // Ensure ts-node uses our custom tsconfig.
    require('ts-node').register({ project: 'e2e/src/tsconfig.json'});
    browser.params['rootUrl'] = browser.baseUrl + '/' + browser.params.app_base;
    browser.manage().window().setSize(1400, 900); // Set initial browser size
    // Ensure that the reports directory has been created.
    if (!existsSync(cucumberReportDirectory)) {
      mkdirSync(cucumberReportDirectory);
    }
  },
  onCleanUp: async() => {
    const jsonFileGlob = 'reports/e2e/json-output-folder/*.json';
    console.log(`Searching for Cucumber reports: ${jsonFileGlob}`);
    var files = glob.sync(jsonFileGlob);
    console.log(`\tSearch returned ${files.length} files.`);
    files.forEach(path => {
      console.log(`Processing cucumber report at ${path}`);
      const file = readFileSync(path);
      const name = path.replace(/ /, "_").substring(31, path.length - 5 /* i.e. omit suffix of ".json" */);
      const xml = cucumberJunit(file, { prefix: name });
      const xmlPath = `${cucumberReportDirectory}/${name}.xml`;
      writeFileSync(xmlPath, xml);
      console.log(`\tFinished. XML report written to ${xmlPath}\r\n`);
    });
  }
};

exports.config = config;

exports.getBrowserStackConfig = function() {
  const localConfig = {'key': config.browserstackKey };
  if(process.env.HTTPS_PROXY) {
    const atTokens = process.env.HTTPS_PROXY.split('@');
    let serverAndPort;
    if (atTokens.length === 2) {
      localConfig['proxyUser'] = atTokens[0].split('//')[1].split(':')[0];
      localConfig['proxyPass'] = atTokens[0].split('//')[1].split(':')[1];
      serverAndPort = atTokens[1];
    } else {
      serverAndPort = process.env.HTTPS_PROXY.split('//')[1];
    }
    localConfig['proxyHost'] = serverAndPort.split(':')[0];
    localConfig['proxyPort'] = serverAndPort.split(':')[1];
  }
  console.log('BrowserStack Config: ' + JSON.stringify(localConfig));
  return localConfig;
};