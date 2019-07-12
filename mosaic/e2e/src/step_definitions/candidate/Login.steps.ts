import { browser, element, by, protractor } from 'protractor';
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { LoginForm } from './Login.page';
import { async } from 'q';

chai.use(chaiAsPromised);
const expect = chai.expect;

let loginForm: LoginForm;

Before(async()=> {
    loginForm = new LoginForm();
});

When('The user is on the login page', async () => {
    await loginForm.get();
    expect(loginForm.isDisplayedUserNameInput().isDisplayed()).is.eventually.be.true;
});

When('The user is on the mobile login page', async () => {
    browser.driver.manage().window().setSize(500, 900).then(async () => {
    await loginForm.get();
    expect(loginForm.isDisplayedUserNameInput().isDisplayed()).is.eventually.be.true;
})

});
Then('The user sees a username field', async() => {
    loginForm.waitForPageLoad();
   await expect(loginForm.isDisplayedUserNameInput().isDisplayed()).is.eventually.be.true;
});


Then('The user sees a password field', async() => {
  await expect(loginForm.isDisplayedPasswordInput().isDisplayed()).is.eventually.be.true;
});

Then('The user sees a submit button', async() => {
   await  expect(loginForm.isDisplayedSubmitButton().isDisplayed()).is.eventually.be.true;
});

Then('The user enters a text in the username field',  async() => {
    await loginForm.enterValueInUsernameField('admin');
})

Then('The user sees the username', async() => {
    await expect(loginForm.isDisplayedUserNameInput().isDisplayed()).is.eventually.be.true;
  });

Then('The user enters a text in the password field',  async() => {
    await loginForm.enterValueInPasswordField('admin');
})

Then('The user sees the password', async() => {
    await expect(loginForm.isDisplayedPasswordInput().isDisplayed()).is.eventually.be.true;
  });

 Then('I enter Username as {string} and Password as {string}', async (string1, string2) => {
    await loginForm.enterValuesInLoginFormAndSubmit('string1', 'string2');
  });


Then('The user is successfully logged in', async() => {
    await loginForm.isDisplayedCandidatesTab();
});

