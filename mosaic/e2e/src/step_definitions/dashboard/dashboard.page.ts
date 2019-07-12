import { browser, element, by, promise, ElementFinder } from 'protractor';

export class Dashboard {
    get(): promise.Promise<any> {
        return browser.get('/#/dashboard');
    }

    getUser(): promise.Promise<any> {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }

    getTitle(): ElementFinder {
        return element(by.tagName('h1'));
    }

}
