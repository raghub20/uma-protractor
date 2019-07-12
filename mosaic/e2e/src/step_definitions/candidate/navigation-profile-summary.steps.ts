import { browser, element, by, protractor } from 'protractor';
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { NavigationProfile } from './navigation-profile-summary.page';

chai.use(chaiAsPromised);
const expect = chai.expect;


let navigationprofile: NavigationProfile;

Before(async()=> {
  navigationprofile = new NavigationProfile();
  
});

Given('The user is on the candidate profile summary page', async () => {
  await navigationprofile.get();
  await expect(navigationprofile.getTitleMessage().getText()).to.eventually.equal('Project Alpha');
  
  // await navigationprofile.navigateToCostModel();
  // await navigationprofile.navigateToCandidates();
  // await navigationprofile.navigateToCandidates();
});

When('The user sees the Cost Models Tab', async () => {
  await expect(navigationprofile.isDisplayedCostModelTab().isDisplayed()).to.eventually.be.true;
});

Then('The user clicks the Cost Models Tab', async () => {
  await navigationprofile.navigateToCostModel();
});

Then('The user sees the Cost Models Page', async () => {
 await expect(navigationprofile.isDisplayedCostModelTitle().isDisplayed()).to.eventually.be.true;
  });


When('The user sees the Candidates Tab', async () => {
  await expect(navigationprofile.isDisplayedCandidatesTab().isDisplayed()).to.eventually.be.true;
});

Then('The user clicks the Candidates Tab', async () => {
  await navigationprofile.navigateToCandidates();
});

Then('The user sees the Candidates Page', async () => {
  
  await expect(navigationprofile.isDisplayedCandidatesTitle().isDisplayed()).to.eventually.be.true;
});

When('The user sees the Approved Moves Tab', async function () {
  await expect(navigationprofile.isDisplayedApprovedMovesTab().isDisplayed()).to.eventually.be.true;
});
// When('The user sees the Approved Moves Title', async () => {
//   await expect(navigationprofile.isDisplayedApprovedMovesTitle().isDisplayed()).to.eventually.be.true;
//  });

Then('The user clicks the Approved Moves Tab', async () => {
  await navigationprofile.navigateToApprovedMovesTab();
});

Then('The user sees the Approved Moves Page', async () => {
  await expect(navigationprofile.isDisplayedApprovedMovesTitle().isDisplayed()).to.eventually.be.true;
});


/*
Given('The user is on the candidate mobile profile summary page', () => {
  browser.driver.manage().window().setSize(500, 900).then(async() => {
  await navigationprofile.get();
  await expect(navigationprofile.getTitleMessage().getText()).to.eventually.equal('Project Alpha');
  });
});
*/