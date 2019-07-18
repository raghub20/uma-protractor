import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Defaultcolumn } from './profile-summary-default.page';
import { Choosecolumn } from './choose-column-data.page';


chai.use(chaiAsPromised);
const expect = chai.expect;
let defaultcolumn: Defaultcolumn;
let choosecolumn: Choosecolumn

Before(() => {
  defaultcolumn = new Defaultcolumn();
  choosecolumn = new Choosecolumn();
});

//1) Scenario: To verify client able to view profiles of all candidates created for the client

Given('The user is on the candidate profiles page for all candidates', async function () {
  return await defaultcolumn.get();
});


When('The client sees profiles of all candidates', async function () {
  return await defaultcolumn.getcandidates().isDisplayed();
});



//2) Scenario: To verify the default information displayed


When('client sees Candidate first name and last name', async function () {
  await choosecolumn.getverifyfullname().isDisplayed().then(async () => {
    return await defaultcolumn.getfirstlastname().getText().then(async (text) => {
      var i: number;
      for (i = 0; i < text.length; i++)
        return await expect(text[i]).contains(",")
    });
  });
});


Then('Client sees Level', async function () {
  return await expect(choosecolumn.getverifylevel().isDisplayed()).to.eventually.be.true;
});

Then('Client sees Departure City and State', function () {
  return choosecolumn.getverifydeparture().isDisplayed().then(async () => {
    return await defaultcolumn.getdeparturevalue().getText().then(async (text) => {
      var i: number;
      for (i = 0; i < text.length; i++)
        return await expect(text[i]).contains(",")
    });
  });
});


Then('client sees Destination City and State', function () {
  return choosecolumn.getverifydestination().isDisplayed().then(async () => {
    return await defaultcolumn.getdestinationvalue().getText().then(async (text) => {
      var i: number;
      for (i = 0; i < text.length; i++)
        return await expect(text[i]).contains(",")
    });
  });
});


Then('Client sees Status', async function () {
  return await expect(choosecolumn.getverifystatus().isDisplayed()).to.eventually.be.true;
});


//3) Scenario: To verify sort of all columns available in summary


When('Client clicks on Candidate name sort', async function () {
  return await defaultcolumn.getsortfullname().isDisplayed();
});


Then('The candidate name should be sortable', async function () {
  await defaultcolumn.getsortfullname().isDisplayed().then(async () => {
    await defaultcolumn.getsortfullname().click().then(async () => {
      var strArr: Array<string> = [];
      await defaultcolumn.getfirstlastname().each(async function (element) {
        await element.getText().then(async (text) => {
          await strArr.push(text);
        });
        await expect(defaultcolumn.getsortascending(strArr)).to.be.true;
      });
    });
    await defaultcolumn.getsortfullname().click().then(async () => {
      var strArr: Array<string> = [];
      await defaultcolumn.getfirstlastname().each(async function (element) {
        await element.getText().then(async (text) => {
          await strArr.push(text);
        });
        return await expect(defaultcolumn.getsortdescending(strArr)).to.be.true;
      });
    });
  });
});


When('Client clicks on Level sort', async function () {
  return await defaultcolumn.getsortlevel().isDisplayed();
});


Then('The Level should be sortable', async function () {
  await defaultcolumn.getsortlevel().isDisplayed().then(async () => {
    await defaultcolumn.getsortlevel().click().then(async () => {
      var strArr: Array<string> = [];
      await defaultcolumn.getlevelvalue().each(async function (element) {
        await element.getText().then(async (text) => {
          await strArr.push(text);
        });
      });
      await expect(defaultcolumn.getsortascending(strArr)).to.be.true;
    });
    await defaultcolumn.getsortlevel().click().then(async () => {
      var strArr: Array<string> = [];
      await defaultcolumn.getlevelvalue().each(async function (element) {
        await element.getText().then(async (text) => {
          await strArr.push(text);
        });
      });
      return await expect(defaultcolumn.getsortdescending(strArr)).to.be.true;
    });
  });
});


When('Client clicks on Departure City and State sort', async function () {
  return await defaultcolumn.getsortdeparture().isDisplayed();
});


Then('The Departure City and State should be sortable', async function () {
  await defaultcolumn.getsortdeparture().isDisplayed().then(async () => {
    await defaultcolumn.getsortdeparture().click().then(async () => {
      var strArr: Array<string> = [];
      await defaultcolumn.getdeparturevalue().each(async function (element) {
        await element.getText().then(async (text) => {
          await strArr.push(text);
        });
      });
      await expect(defaultcolumn.getsortascending(strArr)).to.be.true;
    });
    await defaultcolumn.getsortdeparture().click().then(async () => {
      var strArr: Array<string> = [];
      await defaultcolumn.getdeparturevalue().each(async function (element) {
        await element.getText().then(async (text) => {
          await strArr.push(text);
        });
      });
      return await expect(defaultcolumn.getsortdescending(strArr)).to.be.true;
    });
  });
});


When('Client clicks on Destination City and State sort', async function () {
  return await defaultcolumn.getsortdestination().isDisplayed();
});



Then('The Destination City and State should be sortable', async function () {
  await defaultcolumn.getsortdestination().isDisplayed().then(async () => {
    await defaultcolumn.getsortdestination().click().then(async () => {
      var strArr: Array<string> = [];
      await defaultcolumn.getdestinationvalue().each(async function (element) {
        await element.getText().then(async (text) => {
          await strArr.push(text);
        });
      });
      await expect(defaultcolumn.getsortascending(strArr)).to.be.true;
    });
    await defaultcolumn.getsortdestination().click().then(async () => {
      var strArr: Array<string> = [];
      await defaultcolumn.getdestinationvalue().each(async function (element) {
        await element.getText().then(async (text) => {
          await strArr.push(text);
        });
      });
      return await expect(defaultcolumn.getsortdescending(strArr)).to.be.true;
    });
  });
});


When('Client clicks on Status sort', async function () {
  return await defaultcolumn.getsortstatus().isDisplayed();
});


Then('The Status should be sortable', async function () {
  await defaultcolumn.getsortstatus().click();
  var strArr: Array<string> = [];
  await defaultcolumn.getstatusvalue().each(async function (element) {
    await element.getText().then(async (text) => {
      await strArr.push(text);
    });
  });
  await expect(defaultcolumn.getsortascending(strArr)).to.be.true;
  await defaultcolumn.getsortstatus().isDisplayed().then(async () => {
    await defaultcolumn.getsortstatus().click();
    var strArr: Array<string> = [];
    await defaultcolumn.getstatusvalue().each(async function (element) {
      await defaultcolumn.getstatusHyperlink(element).isPresent().then(async (cond) => {
        if (cond) {
          await defaultcolumn.getstatusHyperlink(element).getText().then(async (text) => {
            await strArr.push(text);
          });
        }
        else {
          await element.getText().then(async (text) => {
            await strArr.push(text);
          });

        }
      });
    });
    return await expect(defaultcolumn.getsortdescending(strArr)).to.be.true;
  });
});

//4) Scenario: To verify client able to inactivate candidate record


When('Client inactivates a candidate record', async function () {
  await defaultcolumn.getselectfirstrecord().isDisplayed().then(async () => {
    await defaultcolumn.getselectfirstrecord().click().then(async () => {
      await defaultcolumn.getselectedfirstrecord().getAttribute('aria-checked').then(async (cond) => {
        return await expect(cond).to.equals("true");
      });
    });

  });
});




//5) Scenario: To verify if client able to navigate to a candidate profile



When('Client navigates to a candidate profile', async function () {
  return await defaultcolumn.getclickfirstrecord().click();
});


Then('Client sees the candidate profile', async function () {
  return await expect(defaultcolumn.getaddcandidateform().isDisplayed()).to.eventually.be.true;
});