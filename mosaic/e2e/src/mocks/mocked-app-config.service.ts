const config = require('../../../src/environment-config.json');

export class MockedAppConfigService {
  public mockedEnvironment = 'dev';
  public readonly configData: any = {};
  private config;

  constructor() {
    this.config = config;
    const configStr = JSON.stringify(config, null, 2);
    this.configData = JSON.parse(configStr);
  }

  replaceString(str: any, search: any, replacement: any) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }

  public getConfig(key: any): {} {
    // Mocked these ones explicitly so we can change them but could have added to the configData as well
    return this.configData[key];
  }

  public getEnv(): string {
    return this.mockedEnvironment;
  }
}
