import { Given, When, Then } from 'cucumber';
import { Actions } from './../util/actions';
import { CommonPage } from './../pages/common-page';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

let actionObj = new Actions();
let commonPageObj = new CommonPage();

Given('User will navigate to {string} tab', (tabName) => {
  //browser.sleep(7000);
  return commonPageObj.navigateToTab(tabName);
});

When('User will select Item per page {string} for pagination', (noOfItems) => {
  return commonPageObj.selectItemPerPage(noOfItems);
});

Then('User will verify {string} items are displayed per page', async (expectedItemCount) => {
  let rows = await commonPageObj.getMatTableRows();
  return expect(parseInt(expectedItemCount)).to.eql(rows.length);
});
