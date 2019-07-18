
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Choosecolumn } from './choose-column-data.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let choosecolumn: Choosecolumn;

Before(() => {
  choosecolumn = new Choosecolumn();
});

//1) Scenario: To verify client contact able to filter the columns to see all fields in candidate profile summary 

Given('The client contact is on candidate profile summary page', async function () {
  return await choosecolumn.get();
});


When('The client contact clicks the column filter icon', async function () {
  return await choosecolumn.getcolumnfiltericon().click();
});



Then('The client contact is able to see column filter pop up', async function () {
  return await choosecolumn.getcolumnfilterpopup().isDisplayed();
});



Then('The client contact checks level column as true', async function () {
   await choosecolumn.getlevelstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return choosecolumn.getLevel().click();
    }
  });
});
 


Then('The client contact checks departure as true', async function () {
  await choosecolumn.getdeparturestatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return choosecolumn.getDeparture().click();
    }
  });
});


Then('The client contact checks destination as true', async function () {
  await choosecolumn.getdestinationstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return choosecolumn.getDestination().click();
    }
  });
});



Then('The client contact checks status date as true', async function () {
  await choosecolumn.getstatusdatestatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return choosecolumn.getstatusdate().click();
    }
  });
});



Then('The client contact checks business unit as true', async function () {
  await choosecolumn.getbusinessstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getbusinessunit().click();
    }
  });
});



Then('The client contact checks invitation sent date as true', async function () {
  await choosecolumn.getinvitationstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getinvitationsent().click();
    }
  });
});



Then('The client contact checks created by as true', async function () {
  await choosecolumn.getcreatedbystatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getcreatedby().click();
    }
  });
});



Then('The client contact checks Email as true', async function () {
  await choosecolumn.getemailstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getemail().click();
    }
  });
});



Then('The client contact clicks apply filter', async function () {
  await choosecolumn.getApplyfilter().isDisplayed().then(async()=>{
    return await choosecolumn.getApplyfilter().click();
  });
});



Then('The client contact is able to see level column', async function () {
  return await choosecolumn.getverifylevel().isDisplayed();
});



Then('The client contact is able to see departure column', async function () {
  return await choosecolumn.getverifydeparture().isDisplayed();
});



Then('The client contact is able to see destination column', async function () {
  return await choosecolumn.getverifydestination().isDisplayed();
});



Then('The client contact is able to see status date column', async function () {
  return await choosecolumn.getverifystatusdate().isDisplayed();
});



Then('The client contact is able to see business unit column', async function () {
  return await choosecolumn.getverifybusinessunit().isDisplayed();
});



Then('The client contact is able to see invitation sent date column', async function () {
  return await choosecolumn.getverifyinvitation().isDisplayed();
});



Then('The client contact is able to see created by column', async function () {
  return await choosecolumn.getverifycreatedby().isDisplayed();
});



Then('The client contact is able to see Email column', async function () {
  return await choosecolumn.getverifyemail().isDisplayed();
});



//2) Scenario: To verify client contact able to filter and remove columns in candidate profile summary

Then('The client contact checks all the columns true', async function () {
  await choosecolumn.getlevelstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getLevel().click();
    }
  });
 await choosecolumn.getdeparturestatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await  choosecolumn.getDeparture().click();
    }
  });
await choosecolumn.getdestinationstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getDestination().click();
    }
  });
await choosecolumn.getbusinessstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getbusinessunit().click();
    }
  });
await choosecolumn.getemailstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getemail().click();
    }
  });
  await choosecolumn.getstatusdatestatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getstatusdate().click();
    }
  });
await choosecolumn.getinvitationstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getinvitationsent().click();
    }
  });
await choosecolumn.getcreatedbystatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'true') {
      return;
    }
    if (text == 'false') {
      return await choosecolumn.getcreatedby().click();
    }
  });


});



Then('The client contact checks level column as false', async function () {
  return await choosecolumn.getLevel().click();;
});



Then('The client contact checks departure as false', async function () {
  return await choosecolumn.getDeparture().click();;
});



Then('The client contact checks destination as false', async function () {
  return await choosecolumn.getDestination().click();
});



Then('The client contact checks status date as false', async function () {
  return await choosecolumn.getstatusdate().click();
});



Then('The client contact checks business unit as false', async function () {
  return await choosecolumn.getbusinessunit().click();
});



Then('The client contact checks invitation sent date as false', async function () {
  return await choosecolumn.getinvitationsent().click();
});


Then('The client contact checks created by as false', async function () {
  return await choosecolumn.getcreatedby().click();
});


Then('The client contact checks Email as false', async function () {
  return await choosecolumn.getemail().click();
});



Then('The client contact does not see level column', async function () {
  return await expect(choosecolumn.getverifylevel().isPresent()).to.become(false);
});



Then('The client contact does not see departure column', async function () {
  return await expect(choosecolumn.getverifydeparture().isPresent()).to.become(false);
});



Then('The client contact does not see destination column', async function () {
  return await expect(choosecolumn.getverifydestination().isPresent()).to.become(false);
});



Then('The client contact does not see status date column', async function () {
  return await expect(choosecolumn.getverifystatusdate().isPresent()).to.become(false);
});



Then('The client contact does not see business unit column', async function () {
  return await expect(choosecolumn.getverifybusinessunit().isPresent()).to.become(false);
});



Then('The client contact does not see invitation sent date column', async function () {
  return await expect(choosecolumn.getverifyinvitation().isPresent()).to.become(false);
});



Then('The client contact does not see created by column', async function () {
  return await expect(choosecolumn.getverifycreatedby().isPresent()).to.become(false);
});



Then('The client contact does not see Email column', async function () {
  return await expect(choosecolumn.getverifyemail().isPresent()).to.become(false);
});



// 3) Scenario: To verify client contact able to uncheck fullname


Then('The client contact is unable to uncheck fullname', async function () {
  await expect(choosecolumn.getfullnamedisabled().isEnabled()).to.become(true);
  await choosecolumn.getfullname().click();
  return await expect(choosecolumn.getfullnamedisabled().isEnabled()).to.become(true);

});



//4) Scenario: To verify client contact able to uncheck status

Then('The client contact is unable to uncheck status', async function () {
  await expect(choosecolumn.getfullnamedisabled().isEnabled()).to.become(true);
  await choosecolumn.getstatus().click();
  return await expect(choosecolumn.getfullnamedisabled().isEnabled()).to.become(true);
});

//5) Scenario: To verify the number of columns selected

Then('All the check box are unchecked',async()=>{

  await choosecolumn.getlevelstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'false') {
      return;
    }
    if (text == 'true') {
      return await choosecolumn.getLevel().click();
    }
  });
 await choosecolumn.getdeparturestatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'false') {
      return;
    }
    if (text == 'true') {
      return await choosecolumn.getDeparture().click();
    }
  });
await choosecolumn.getdestinationstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'false') {
      return;
    }
    if (text == 'true') {
      return await choosecolumn.getDestination().click();
    }
  });
await choosecolumn.getbusinessstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'false') {
      return;
    }
    if (text == 'true') {
      return await choosecolumn.getbusinessunit().click();
    }
  });
await choosecolumn.getemailstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'false') {
      return;
    }
    if (text == 'true') {
      return await choosecolumn.getemail().click();
    }
  });
  await choosecolumn.getstatusdatestatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'false') {
      return;
    }
    if (text == 'true') {
      return await choosecolumn.getstatusdate().click();
    }
  });
await choosecolumn.getinvitationstatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'false') {
      return;
    }
    if (text == 'true') {
      return await choosecolumn.getinvitationsent().click();
    }
  });
await choosecolumn.getcreatedbystatus().getAttribute('aria-checked').then(async(text)=> {
    if (text == 'false') {
      return;
    }
    if (text == 'true') {
      return await choosecolumn.getcreatedby().click();
    }
  });


});

Then('The client contact verifies selected columns', async function () {
   await choosecolumn.getSelectedcount().getText().then(async (count)=>{
    var cnt: number = parseInt(count);
    return await expect(choosecolumn.getcalculatedcount()).equals(cnt);
  });
});

//Scenario: To verify the number of columns unselected

Then('The client contact verifies unselected columns', async function () {
  await choosecolumn.getSelectedcount().getText().then(async (count)=>{
   var cnt: number = parseInt(count);
   return await expect(choosecolumn.getunselectedcount()).equals(cnt);
 });
});


//6) Scenario: To verify working of reset

Then('The client contact clicks reset button', async function(){
  return await choosecolumn.getReset().click();
});

Then('The client contact is able to see firstname column', async function(){
  return await choosecolumn.getverifyfullname().isDisplayed();
});

Then('The client contact is able to see status column', async function(){
  return await choosecolumn.getverifystatus().isDisplayed();
});

//7) Scenario: To verify the first and last columns

Then('The first column is full name',async function(){
  await choosecolumn.getfirstcolumn().getText().then(async(text)=>{
    return await expect(text).equals("Full Name");
  })
});
Then('The last column is status',async function(){
  await choosecolumn.getlastcolumn().getText().then(async(text)=>{
    return await expect(text).equals("Status");
  })
});