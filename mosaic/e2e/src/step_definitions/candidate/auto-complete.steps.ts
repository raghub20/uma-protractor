
import { Given, Then, Before, When } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { AutoComplete } from './auto-complete.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let autocomplete: AutoComplete;


Before(() => {
  autocomplete = new AutoComplete();
});
//1) Scenario: To verify user gets suggestion for auto complete in departure field

Given('The user navigates to add candidate page', async function () {
  await autocomplete.get();
  await autocomplete.getAddCandidateButtonE1().click();
});

When('The user enters {string} on departure and sees related text words in a drop down', async function (input) {
  await autocomplete.getDepartureE1().isDisplayed().then(async () => {
    await autocomplete.getDepartureE1().click().then(async () => {
      await autocomplete.getDepartureE1().sendKeys(input).then(async () => {
        var myString: string = input.toString(); //convert input data from feature to string
        var checklowercase = myString.toLowerCase(); //change input data to lowercase
        await autocomplete.getautocompletedepartureE1(checklowercase).isPresent().then(async (cond)=>{
          if(cond){
          await autocomplete.getautocompletedepartureE1(checklowercase).getText().then(async (text) => { //if input data is lowercase
            var a: Array<string> = text.toString().split(","); //get the items in auto complete pop up and split with comma
            var b: string;
            var i: number = 0;
            while (i < a.length) {
              b = a[i].concat(a[i+1]);
              await expect(b.includes(checklowercase)).to.be.true; //check for input data in auto complete pop up
              i += 2;
            }
          });
        }
        })
        var checkuppercase = myString.toUpperCase(); //change input data to uppercase
        await autocomplete.getautocompletedepartureE1(checkuppercase).isPresent().then(async (cond2)=>{ 
          if(cond2){
        await autocomplete.getautocompletedepartureE1(checkuppercase).getText().then(async (text) => { //if input data is uppercase
          var a: Array<string> = text.toString().split(","); //get the items in auto complete pop up and split with comma
          var b: string;
          var i: number = 0;
          while (i < a.length) {
            b = a[i].concat(a[i+1]);
            await expect(b.includes(checkuppercase)).to.be.true; //check for input data in auto complete pop up
            i += 2;
          }
        });
      }
      });
      });
    });
    return;
  });
});

Then('The user can select the related word suggestion having searched text {string} in departure', async function (text) {
  var myString: string = text.toString();
  var checklowercase = myString.toLowerCase();
  await autocomplete.getselectautocompletedepartureE1(checklowercase).isPresent().then(async(cond)=>{
    if(cond){
      return autocomplete.getselectautocompletedepartureE1(checklowercase).click();
    }
  });
    var checkuppercase = myString.toLowerCase();
    await autocomplete.getselectautocompletedepartureE1(checkuppercase).isPresent().then(async(cond2)=>{
      if(cond2){
        return autocomplete.getselectautocompletedepartureE1(checkuppercase).click();
      }
    });
  
});

When('The user enters {string} on destination and sees related text words in a drop down',  async function (input) {
  await autocomplete.getDestinationE1().isDisplayed().then(async () => {
    await autocomplete.getDestinationE1().click().then(async () => {
      await autocomplete.getDestinationE1().sendKeys(input).then(async () => {
        var myString: string = input.toString();
        var checklowercase = myString.toLowerCase();
        await autocomplete.getautocompleteDestinationE1(checklowercase).isPresent().then(async (cond)=>{
          if(cond){
          await autocomplete.getautocompleteDestinationE1(checklowercase).getText().then(async (text) => {
            var a: Array<string> = text.toString().split(",");
            var b: string;
            var i: number = 0;
            while (i < a.length) {
              b = a[i].concat(a[i+1]);
              await expect(b.includes(checklowercase)).to.be.true;
              i += 2;
            }
          });
        }
        })
        var checkuppercase = myString.toUpperCase();
        await autocomplete.getautocompleteDestinationE1(checkuppercase).isPresent().then(async (cond2)=>{
          if(cond2){
        await autocomplete.getautocompleteDestinationE1(checkuppercase).getText().then(async (text) => {
          var a: Array<string> = text.toString().split(",");
          var b: string;
          var i: number = 0;
          while (i < a.length) {
            b = a[i].concat(a[i+1]);
            await expect(b.includes(checkuppercase)).to.be.true;
            i += 2;
          }
        });
      }
      });
      });
    });
    return;
  });
});

Then('The user can select the related word suggestion having searched text {string} in destination', async function (text) {
  var myString: string = text.toString();
  var checklowercase = myString.toLowerCase();
  await autocomplete.getselectautocompleteDestinationE1(checklowercase).isPresent().then(async(cond)=>{
    if(cond){
      return autocomplete.getselectautocompleteDestinationE1(checklowercase).click();
    }
  });
    var checkuppercase = myString.toLowerCase();
    await autocomplete.getselectautocompleteDestinationE1(checkuppercase).isPresent().then(async(cond2)=>{
      if(cond2){
        return autocomplete.getselectautocompleteDestinationE1(checkuppercase).click();
      }
    });
  
});

