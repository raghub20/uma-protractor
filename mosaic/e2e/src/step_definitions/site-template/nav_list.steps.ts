import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser, element, by, promise, protractor } from 'protractor';
import { NavList } from './nav_list.component';


chai.use(chaiAsPromised);
const expect = chai.expect;

let navList: NavList;

Before(() => {
    navList = new NavList();
});

Given('I am a user of the site and want to use the navigation', () => {
    return expect(navList.getUser()).to.eventually.equal('user');
});

// Load the dashboard so that we can see the navigation in the site template
When('I navigate to the dashboard so that I can see the navigation', () => {
    return navList.get();
});

// Verify that the desktop navigation is visible
Then('I see the desktop navigation list', async () => {
    browser.driver.manage().window().setSize(1400, 900);
    await browser.sleep(5000);
    return navList.navDesktop.isPresent;
});

Then('I see the collapsed desktop navigation list', async () => {
    await navList.btnEject.isDisplayed();
    await navList.btnEject.click();
    await browser.sleep(5000);
    return navList.navDesktop.isPresent;
})

// Verify that the mobile navigation is visible
Then('I see the mobile navigation list', async () => {
    browser.driver.manage().window().setSize(500, 900);
    await browser.sleep(5000);
    await navList.btnMenuMobile.isDisplayed;
    await navList.btnMenuMobile.click();
    await browser.sleep(5000);
    await navList.navMobile.isPresent;
    await navList.navMobile.isDisplayed;
});