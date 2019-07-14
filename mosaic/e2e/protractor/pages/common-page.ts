import {Actions} from './../util/actions';
import { element, by, ElementArrayFinder, ElementFinder, browser } from 'protractor';

export class CommonPage {
  actionObj : Actions = new Actions();

  async getItemPerPageDropdownAllEle(): Promise<ElementFinder[]> {
    return await element.all(by.css('[id^="mat-select-"]'));
  }

  async selectItemPerPage(noOfItems: string, index=0): Promise<void> {
    let itemElements: ElementFinder[] = await this.getItemPerPageDropdownAllEle();
    return await this.actionObj.selectDropdownVal(itemElements[index], noOfItems);
  }

  async navigateToTab(tabName : string): Promise<void> {
    let el = await element(by.linkText(tabName));
    if(this.actionObj.waitForElementToVisible(el, 6000)) {
      el.click();
    }
  }

  async getMatTableRows() {
    return element.all(by.css('.mat-table tbody tr'));
  }
}