import { browser } from 'protractor';
import { By } from 'selenium-webdriver';

class Home {
    get () {
        return browser.get('/');
    }

    getUser() {
        return 'user'; // TODO: Find and return real user
    }

    getTitle() {
        return browser.driver.findElement(By.tagName('h1'));
    }
}

export const home = new Home();
