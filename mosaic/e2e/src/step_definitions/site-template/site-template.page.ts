import { browser, promise, element, by, ElementFinder } from 'protractor';

export class SiteTemplate {
    get(): promise.Promise<any> {
        return browser.get('/#/dashboard');
    }

    getUser(): promise.Promise<any> {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }

    getMainContentEl(): ElementFinder {
        return element(by.css('.main-content'));
    }

    getDesktopNavEl(): ElementFinder {
        return element(by.css('.nav-container-desktop'));
    }

    getDesktopSearchInputEl(): ElementFinder {
        return element(by.css('.header-desktop input.search-input'));
    }

    getDesktopSearchIconEl(): ElementFinder {
        return element(by.cssContainingText('.header-desktop mat-icon', 'search'));
    }

    getMobileMenuEl(): ElementFinder {
        return element(by.cssContainingText('.header-mobile mat-icon', 'menu'));
    }

    getMobileSearchInputEl(): ElementFinder {
        return element(by.css('.header-mobile input.search-input'));
    }

    getMobileSearchIconEl(): ElementFinder {
        return element(by.cssContainingText('.header-mobile mat-icon', 'search'));
    }

    getUserContextContainerEl(): ElementFinder {
        return element(by.css('.userContextContainer'));
    }
}
