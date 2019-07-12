import { browser, element, by, promise, ElementFinder } from 'protractor';

export class EmployeeStatusSummary {

    get(): promise.Promise<any> {
        return browser.get('/');
    }

    getUser(): promise.Promise<any> {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }

    getTitle(): ElementFinder {
        return element(by.tagName('h1'));
    }
    
    getMovePhase1El(): ElementFinder { 
        //return element.all(by.xpath("//a[contains(text(),'1')]")).get(0);
        return element.all(by.xpath("//a[contains(text(),'1')]")).get(0);
    }

    getMovePhase2El(): ElementFinder {
        return element.all(by.xpath("//a[contains(text(),'2')]")).get(0);
    }

    getMovePhase3El(): ElementFinder {
        return element.all(by.xpath("//a[contains(text(),'3')]")).get(0);
    }

    getMovePhase4El(): ElementFinder {
        return element.all(by.xpath("//a[contains(text(),'4')]")).get(0);
    }

    getMovePhase5El(): ElementFinder {
        return element.all(by.xpath("//a[contains(text(),'5')]")).get(0); 
    }

    getMovePhase1AltEl(): ElementFinder {
        return element(by.cssContainingText('.ng-reflect-message', 'Current Move Phase is 1 of 5: '));
    }

    getMovePhase1AltE2(): ElementFinder {
        return element(by.cssContainingText('.ng-reflect-message', 'Current Move Phase is 2 of 5: '));
    }

    getMovePhase3AltEl(): ElementFinder {
        return element(by.cssContainingText('.ng-reflect-message', 'Current Move Phase is 3 of 5: '));
    }

    getMovePhase4AltEl(): ElementFinder {
        return element(by.cssContainingText('.ng-reflect-message', 'Current Move Phase is 4 of 5: '));
    }

    getMovePhase5AltEl(): ElementFinder {
        return element(by.cssContainingText('.ng-reflect-message', 'Current Move Phase is 5 of 5: '));
    }

    getNextPageEl(): ElementFinder {
        return element(by.css('mat-paginator-navigation-next'));
    }
}