import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { SiteTemplate } from './site-template.page';
import { browser } from 'protractor';

chai.use(chaiAsPromised);
const expect = chai.expect;

let siteTemplate: SiteTemplate;

Before(() => {
    siteTemplate = new SiteTemplate();
});

Given('I am a logged in user looking at the site template', async () => {
    await expect(siteTemplate.getUser()).to.eventually.equal('user');
});

When('I am on the site template', async () => {
    await siteTemplate.get();
});

//Test that the main area to display the Dashboard is present
Then('I see a defined area to display page content', async () => {
    await expect(siteTemplate.getMainContentEl().isPresent()).to.eventually.be.true;
});

//  \/\/\/ LEFT NAV \/\/\/
//Test that the area for the Left Hand navigation is present in desktop browsers
Then('I see a visible area that will contain the site navigation', async () => {
    // First set browser to desktop width
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await Promise.all([
            expect(siteTemplate.getDesktopNavEl().isDisplayed()).to.eventually.be.true,
            expect(siteTemplate.getMobileMenuEl().isDisplayed()).to.eventually.not.be.true
        ]);
    });
});

//Test that the 'Menu' option is visible on mobile browsers
Then('I see a menu option to display the site navigation', async () => {
    // First set browser to mobile width
    await browser.driver.manage().window().setSize(500, 900).then(async () => {
        await expect(siteTemplate.getMobileMenuEl().isDisplayed()).to.eventually.be.true
    });
});

//  \/\/\/ SEARCH \/\/\/
//Test that the global search option is visible on desktop browsers
Then('I see a defined area to display search', async () => {
    // First set browser to desktop width
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await Promise.all([
            expect(siteTemplate.getDesktopSearchInputEl().isDisplayed()).to.eventually.be.true,
            expect(siteTemplate.getDesktopSearchIconEl().isDisplayed()).to.eventually.be.true
        ]);
    });
});

//Test that the global search option is visible on mobile browsers
Then('I see a menu option to display the search', async () => {
    // First set browser to mobile width
    await browser.driver.manage().window().setSize(500, 900).then(async () => {
        await siteTemplate.getMobileSearchIconEl().isDisplayed().then(async () => {
            await siteTemplate.getMobileSearchIconEl().click().then(async () => {
                await expect(siteTemplate.getMobileSearchInputEl().isDisplayed()).to.eventually.be.true;
            })
        });
    });
});

//  \/\/\/ LOGGED IN USER AND AVATAR \/\/\/
//Test that the area for the user name and avatar is visible on desktop browsers
Then('I see a defined area to display logged in user context on the main page', async () => {
    // First set browser to desktop width
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await expect(siteTemplate.getUserContextContainerEl().isDisplayed()).to.eventually.be.true;
    });
});

//Test that the area for the user name and avatar is not visible in the main landing page on mobile browsers
Then('I do not see an area for the logged in user context on the main landing page', async () => {
    // First set browser to mobile width
    await browser.driver.manage().window().setSize(500, 900).then(async () => {
        await expect(siteTemplate.getUserContextContainerEl().isDisplayed()).to.eventually.not.be.true;
    });
});
