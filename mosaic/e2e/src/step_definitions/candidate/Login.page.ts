import { browser, element, by, promise, ElementFinder } from 'protractor';

const userNameInput = by.css('input[formcontrolname="userName"]');
const passwordInput = by.css('input[formcontrolname="password"]');
const loginButton = by.xpath('//*[contains(text(),"Login")]');
const candidatesTab = by.css('a[ng-reflect-router-link="candidate-profiles"]');

export class LoginForm{
    get() {
        return browser.get('/#/project-alpha/login');
    }

    waitForPageLoad(){
        browser.sleep(5000);
    }

    isDisplayedCandidatesTab(): ElementFinder {
        this.waitForPageLoad();
        return element(candidatesTab);
    }

    isDisplayedUserNameInput(): ElementFinder {
        return element(userNameInput);
    }

    isDisplayedPasswordInput() : ElementFinder {
        return element(passwordInput);
    }

    isDisplayedSubmitButton() : ElementFinder {
        return element(loginButton);
    }

    enterValueInPasswordField(password){
        this.waitForPageLoad();
        element(passwordInput).click();
        element(passwordInput).sendKeys(password);
    }

    enterValueInUsernameField(username){
        this.waitForPageLoad();
        element(userNameInput).click();
        element(userNameInput).sendKeys(username);
    }

    enterValuesInLoginFormAndSubmit(userName, password){
        this.enterValueInUsernameField(userName);
        this.enterValueInPasswordField(password);
        element(loginButton).click();
    }


}