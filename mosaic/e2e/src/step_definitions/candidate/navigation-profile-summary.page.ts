import { browser, element, by, promise, ElementFinder } from 'protractor';

const costModelTitle = by.xpath('//h2[contains(text(),"Cost Models")]');
const costModelTab = by.xpath('//*[@ng-reflect-router-link="cost-models"]');

const ApprovedMovesTitle = by.xpath('//h2[contains(text(),"Approved Moves")]');
const ApprovedMovesTab = by.xpath('//*[@ng-reflect-router-link="approved-moves"]');

const candidatesTab=by.xpath('//*[@ng-reflect-router-link="candidate-profiles"]')
const candidatesTitle = by.xpath('//h2[contains(text(),"Candidate Details")]');
export class NavigationProfile  {

    get(): promise.Promise<any> {
        return browser.get('/#/project-alpha');     
    }

    getUser(): promise.Promise<any> {
        return new promise.Promise((resolve) => resolve('user')); 
    }

    getTitleMessage(): ElementFinder {
        this.waitForPageLoad();
        return element(by.tagName('h1'));
    }

    isDisplayedCostModelTab(): ElementFinder {
        this.waitForPageLoad();
        return element(costModelTab);
    }

    isDisplayedCandidatesTab(): ElementFinder {
        this.waitForPageLoad();
        return element(candidatesTab);
    }

    isDisplayedApprovedMovesTab(): ElementFinder {
        this.waitForPageLoad();
        return element(ApprovedMovesTab);
    }

    navigateToTab(tabId){
        this.waitForPageLoad();
        element(tabId).click();
    }
    /*
    navigateToCostModel() {
        this.waitForPageLoad();
        element(costModelTab).click();
    }

    navigateToCandidates() {
        this.waitForPageLoad();
        element(candidatesTab).click();
    }
    */
    waitForPageLoad(){
        browser.sleep(3000);
    }

    isDisplayedCostModelTitle() : ElementFinder {
        this.waitForPageLoad();
        this.waitForPageLoad();
       return  element(costModelTitle);
    }

    isDisplayedCandidatesTitle() : ElementFinder {
        this.waitForPageLoad();
        return element(candidatesTitle);
    }

    isDisplayedApprovedMovesTitle() : ElementFinder {
        this.waitForPageLoad();
        this.waitForPageLoad();
        return element(ApprovedMovesTitle);
    }

    navigateToApprovedMovesTab(){
        this.waitForPageLoad();
       element(ApprovedMovesTab).click();
    
    }
}
