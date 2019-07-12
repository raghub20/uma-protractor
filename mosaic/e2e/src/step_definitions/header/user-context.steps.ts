import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { UserContext } from './user-context.page';
import { browser } from 'protractor';

chai.use(chaiAsPromised);
const expect = chai.expect;

let userContext: UserContext;

Before(() => {
    userContext = new UserContext();
});

Given('I am a logged in user looking for my avatar', async () => {
    await expect(userContext.getUser()).to.eventually.equal('user');
});

When('I am on a page in the site', async () => {
    await userContext.get();
});

//  \/\/\/ AVATAR \/\/\/
//Test that the avatar appears in desktop browsers
Then('I see an avatar for the logged in user', async () => {
    // First set browser to desktop width
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await expect(userContext.getUserIconEl().isDisplayed()).to.eventually.be.true;
    });
});

//Test that the avatar does NOT appear in mobile browsers 
Then('I do not see an avatar for the logged in user', async () => {
    // First set browser to mobile width
    await browser.driver.manage().window().setSize(500, 900).then(async () => {
        await expect(userContext.getUserIconEl().isDisplayed()).to.eventually.be.false;
    });
});

//  \/\/\/ LOGGED IN USER \/\/\/
//Test that the name of the logged in user appears in desktop browsers
Then('I see the name of the logged in user', async () => {
    // First set browser to desktop width
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await expect(userContext.getUserNameEl().isDisplayed()).to.eventually.be.true;
    });
});

//Test that the name of the logged in user does NOT appear in mobile browsers
Then('I do not see the name of the logged in user', async () => {
    // First set browser to mobile width
    await browser.driver.manage().window().setSize(500, 900).then(async () => {
        await expect(userContext.getUserNameEl().isDisplayed()).to.eventually.be.false;
    });
});
