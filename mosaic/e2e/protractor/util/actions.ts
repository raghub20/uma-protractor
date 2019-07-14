import { element, by, ElementFinder, browser, ExpectedConditions as EC } from "protractor";

export class Actions {
  async clickOnLinkText(linkText: string): Promise<any> {
    let el = element(by.linkText(linkText));
    if(this.waitForElementToVisible(el)) {
      return el.click();
    }
  }

  async selectDropdownVal(selectEle: ElementFinder, targetText: string): Promise<void> {
    await selectEle.click();
    return element(by.cssContainingText('.mat-option-text', targetText)).click();
  }

  async waitForElementToVisible(el, waitTime=2000): Promise<any> {
    return browser.wait(EC.visibilityOf(el), waitTime);
  }

  
}