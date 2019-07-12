import { browser, element, by, promise, ElementFinder } from 'protractor';

export class Logout {
    get(): promise.Promise<any> {
        return browser.get('/');
    }

    getUser(): promise.Promise<any> {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }
    
    getDesktopLogoutEl(): ElementFinder {
        return element(by.xpath("//*[contains(text(), 'Log Out')]"));
    }
    
    getMobileLogoutEl(): ElementFinder {
        return element(by.xpath("//*[contains(text(), 'Logout')]"));
    }

    getMenuButtonEl(): ElementFinder {
        return element(by.cssContainingText('mat-icon', 'menu'));
    }

    getNameExpandButtonEl(): ElementFinder {
        return element(by.xpath("//*[contains(text(),'expand_more')]"));
    }

    getDashboardTitle(): ElementFinder {
        return element(by.xpath("//h1[contains(text(),'My Dashboard')]"));
    }

}