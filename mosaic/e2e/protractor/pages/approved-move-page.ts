import { Actions } from './../util/actions';
import { element, by, ElementArrayFinder, ElementFinder, browser } from 'protractor';


export class ApprovedMovesPage {

  actionObj: Actions = new Actions();

  async selectLevel(levelStr) {
    let levelDropdownEle = element(by.id('mat-select-5'));
    this.actionObj.selectDropdownVal(levelDropdownEle, levelStr);
  }
}