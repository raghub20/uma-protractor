import { browser, element, by, promise, protractor, Ptor, WebElement, ElementFinder } from 'protractor';

export class NavList {

    navDesktop = element(by.css('nav-container-desktop'));
    navMobile = element(by.className('mat-drawer-inner-container'));

    btnMenuMobile = element(by.cssContainingText('mat-icon', 'menu'));
    btnEject = element(by.cssContainingText('mat-icon', 'eject'))

    getComponent():ElementFinder {
        return element(by.css('.navigation'));
    }

    get(): promise.Promise<any> {
        return browser.get('/#/dashboard');
    }

    getUser(): promise.Promise<any> {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }
}
