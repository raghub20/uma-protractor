import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Logout } from './logout.page'
import { browser, element, by, protractor, promise } from 'protractor';

chai.use(chaiAsPromised);
const expect = chai.expect;

let logout: Logout;

Before(() => {
    logout = new Logout();
});

Given('I am a logged in user who wants to log out', async () => {
    await expect(logout.getUser()).to.eventually.equal('user');
});

When('I am on any page where log out is accessible', async () => {
    await logout.get();
});

//\/\/\/\/\/ Desktop Log out \/\/\/\/\/
Then('I can select the desktop log out option and I am redirected to logout', async () => {
    await logout.getNameExpandButtonEl().isDisplayed().then(async () => { 
        await logout.getNameExpandButtonEl().click().then(async () => {
            browser.sleep(2000);
            await logout.getDesktopLogoutEl().isDisplayed().then(async () => {
                await logout.getDesktopLogoutEl().click().then(async () => {
                    await browser.wait(protractor.ExpectedConditions.urlContains('logout'), 5000);
                });
            });
        });
    });
});


//\/\/\/\/\/ Mobile Log out \/\/\/\/\/
Then('I can select the mobile log out option and I am redirected to logout', async () => {
    await browser.driver.manage().window().setSize(500, 900).then(async () => {
        await logout.getMenuButtonEl().isDisplayed().then(async () => { 
            await logout.getMenuButtonEl().click().then(async () => {
                await logout.getMobileLogoutEl().isDisplayed().then(async () => {
                    await logout.getMobileLogoutEl().click().then(async () => {
                        await browser.wait(protractor.ExpectedConditions.urlContains('logout'), 5000);
                    });
                });
            });
        });
    });
});