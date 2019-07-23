import { Given, Then, When, Before, setDefaultTimeout } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { ApprovedMoves } from './approved-moves.page';
import { browser, ExpectedConditions as EC } from 'protractor';

chai.use(chaiAsPromised);
const expect = chai.expect;

let approvedmoves: ApprovedMoves = new ApprovedMoves();
let actual: string;

setDefaultTimeout(300 * 1000);

Given('the User Navigates to Transferee’s Profile View', async () => {
  await approvedmoves.get();
  await approvedmoves. getApprovedMovesTab().click(); 
  await approvedmoves.getApprovedMovesView().isDisplayed();   // verifying candidates screen displayed
});

When('User will open browser in mobile compatibility mode', async() => {
  await browser.manage().window().setSize(542, 615);
});

Then('User will wait for {string} seconds', (waitForSeconds) => {
  return browser.sleep(parseInt(waitForSeconds)*1000);
});

Then('User will verify {string} header is displayed', async (headerName) => {
  let el = await approvedmoves.getHeader(headerName);
  return expect(el.isDisplayed()).to.be.eventually.true;
});

Then('User will verify search box is displayed', () => {
  return expect(approvedmoves.searchItemInput().isDisplayed()).to.be.eventually.true;
});

When('User will do {string} sort of approved moves table by clicking on {string} header', async (sortType, headerName) => {
  return await approvedmoves.performSort(headerName, sortType);
});

Then('User will verify the {string} sorted data for the header {string}', async (sortType, headerName) => {
  let result = await approvedmoves.verifyTableSortData(headerName, sortType);
  return expect(result).to.be.true;
});

When('User will enter {string} in search box', async (searchText) => {
  return approvedmoves.searchForItem(searchText);
});

Then('User will verify {string} is showing in approved moves table', async (searchText) => {
  let result = await approvedmoves.verifyTextInApprovedMovesTable(searchText);
  return expect(result).to.be.true;
});

Then('User will click the Next Pages', async () => {
  return browser.executeScript('window.scrollTo(0,document.body.scrollHeight);')
  .then(() => {
    return approvedmoves.getNextPage().click();
  });
});

When('User will select Item per page {string} for pagination', (noOfItems) => {
  return approvedmoves.selectItemPerPage(noOfItems);
});

Then('User will verify {string} items are displayed per page', async (expectedItemCount) => {
  let rows = await approvedmoves.getApprovedMovesTableBody();
  return expect(parseInt(expectedItemCount)).to.eql(rows.length);
});

When('User will open table column section of approved moves page', async () => {
  await browser.sleep(4000);
  let viewColumnEle = await approvedmoves.getViewColumnEle();
  return viewColumnEle.click();
});

When('User will wait until the table columns to load', () => {
 return approvedmoves.waitForTableColumnsToLoad();
})

Then('User will check columns are enabled as {string}', async (isEnabled, dataTable) => {
 let expectedVal = 'true';
 if(isEnabled == 'Yes' || isEnabled == 'true') {
   expectedVal = 'false';
 }
 let tableRows = dataTable.hashes();
 for(let i=0; i<tableRows.length; i++) {
   let checkboxEle = await approvedmoves.getColumnCheckboxEle(tableRows[i]['Column Name'].trim());
   let enableVal = await checkboxEle.root.getAttribute('ng-reflect-disabled');
   expect(checkboxEle.root.getAttribute('ng-reflect-disabled')).to.eventually.equal(expectedVal);
 }
});

Then('User will verify {string} headers are displayed in the approved moves table', async (expectedHeaderCount) => {
  let approvedMovesTable = await approvedmoves.getApprovedMovesTableEle();
  expect(parseInt(expectedHeaderCount)).to.equal(approvedMovesTable.headers.length);
});

When('User will click on {string} button', async (buttonText) => {
 let buttonEle = await approvedmoves.getButtonEle(buttonText);
 return await buttonEle.click();
});

When('User will select the {string} from select column view', async(columnNamesStr) => {
  let columnNamesArr = columnNamesStr.split(',');
  for(let i=0; i<columnNamesArr.length; i++) {
    if(columnNamesArr[i].trim() != '') {
      let checkboxEle = await approvedmoves.getColumnCheckboxEle(columnNamesArr[i].trim());
      await browser.executeScript("arguments[0].scrollIntoView();", checkboxEle.label);
      await checkboxEle.label.click();
    }
  }
});

When('User will click on RESET button', async() => {
  let el = await approvedmoves.getResetButton();
  el.click();
});

Then('User will check columns are {string}', async (checkedOrUnchecked : string, dataTable) => {
  let rows = dataTable.hashes();
  let isChecked = 'false';
  if(checkedOrUnchecked.toLowerCase() == 'checked') {
    isChecked = 'true';
  }
  for(let i=0; i<rows.length; i++) {
    let el = await approvedmoves.getColumnCheckboxEle(rows[i]['Column Name'].trim());
    let actualVal = await el.input.getAttribute('aria-checked');
    expect(actualVal).to.be.equal(isChecked);
  }
});