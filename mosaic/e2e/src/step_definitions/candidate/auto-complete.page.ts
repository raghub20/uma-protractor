import { browser, element, by, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class AutoComplete {
    get() {
        return browser.get('/#/project-alpha');
    }

    getUser() {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }
    getAddCandidateButtonE1(): ElementFinder{
        return element(by.xpath("//button[@class='mat-raised-button mat-primary']"));
    }
    getDepartureE1(): ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Departure']"));
    }
    getDestinationE1(): ElementFinder{
        return element(by.xpath("//input[@formcontrolname='Destination']"));
    }
    getautocompletedepartureE1(input: string): ElementArrayFinder{
        return element.all(by.cssContainingText("span.mat-option-text",input));
    }
    getselectautocompletedepartureE1(input: string): ElementFinder{
        return element.all(by.cssContainingText("span.mat-option-text",input)).get(0);
    }
    getautocompleteDestinationE1(input: string): ElementArrayFinder{
        return element.all(by.cssContainingText("span.mat-option-text",input));
    }
    getselectautocompleteDestinationE1(input: string): ElementFinder{
        return element.all(by.cssContainingText("span.mat-option-text",input)).get(0);
    }
    
}