import { setDefaultTimeout, After, Status, BeforeAll, AfterAll } from 'cucumber';
import { browser } from 'protractor';
import { MockedSetup} from './mocked-setup';

setDefaultTimeout(300 * 1000); // Bump step timeout to 300 seconds for older OS/browsers and VMs

// tslint:disable-next-line: prefer-const
let mockedSetup = new MockedSetup();

BeforeAll(async () => {
  if (browser.params.useMockedApi) {
// tslint:disable-next-line: prefer-const
    let instance = 0; // browser.params.instance;
    return mockedSetup.startMockedApi(instance);
  }
});

AfterAll(async () => {
  if (browser.params.useMockedApi) {
    return mockedSetup.stopMockedApi();
  }
});

After(async (scenarioResult) => {
  if (scenarioResult.result.status === Status.FAILED) {
    // Attach the original state
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, 'image/png');
  }
  return Promise.resolve(scenarioResult.result.status);
});
