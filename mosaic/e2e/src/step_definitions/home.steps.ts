import { browser, promise } from 'protractor';
import { CallbackStepDefinition, Given, Then, When } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { home } from './home.page';
import { protractor } from 'protractor/built/ptor';

chai.use(chaiAsPromised);
const expect = chai.expect;

Given('I am a user', () => {
    expect(home.getUser()).to.equal('user');
});

When('I visit the home page', (callback: CallbackStepDefinition) => {
    home.get().then(callback);
});

Then('I see the home page', () => {
    browser.getCurrentUrl().then((url) => {
        expect(url).to.equal(browser.baseUrl + '/');
    });
});

Then('I see the title', () => {
    expect(home.getTitle().getText()).to.eventually.equal('Welcome To New Angular App!');
});
