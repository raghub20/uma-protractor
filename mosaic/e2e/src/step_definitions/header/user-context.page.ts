import { browser, promise, element, by, ElementFinder } from 'protractor';

export class UserContext {
    get(): promise.Promise<any> {
        return browser.get('/');
    }

    getUser(): promise.Promise<any> {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }

    getUserIconEl(): ElementFinder {
        return element(by.css('.userImageSection mat-icon'));
    }

    getUserNameEl(): ElementFinder {
        return element(by.css('.userNameSection .menuName'));
    }
}