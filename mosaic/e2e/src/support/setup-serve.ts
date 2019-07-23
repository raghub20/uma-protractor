/* Used for serving mocked data website */

import { BeforeAll, setDefaultTimeout } from 'cucumber';
import { MockedSetup } from './mocked-setup';

setDefaultTimeout(300 * 1000); // Bump step timeout to 300 seconds for older OS/browsers and VMs

// tslint:disable-next-line: prefer-const
let mockedSetup = new MockedSetup();

BeforeAll(async () => {
  return mockedSetup.startMockedApi(0);
});
