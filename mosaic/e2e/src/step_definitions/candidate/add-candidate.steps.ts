import { Given, Then, When, Before } from 'cucumber';
import { browser, element, by } from 'protractor';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { CandidatesProfile } from './add-candidate.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let candidatesProf: CandidatesProfile;
let actual: string;

Before(() => {
    candidatesProf = new CandidatesProfile();
});

//Login

Given('The user is on the candidate profile creation page', async () => {
    await candidatesProf.get();
    await candidatesProf.getCandidatesTabE1().click();  // clicking candidate tab
    await candidatesProf.getCandidatesScreenE1().isDisplayed();   // verifying candidates screen displayed
    await candidatesProf.getAddCandidateButtonE1().click();  // clicking add new candidate button
    return candidatesProf.getcandidatecreationpopupE1().isDisplayed();  // verifying profile creation page
});

// @Desktop
  
// Scenario: To verify the candidate profile creation page

Then('The user sees a First Name field', () => {
    candidatesProf.getFirstnameE1().isPresent();   // verifying first name field is present displayed
});
Then('The user sees a Last Name field', () => {
    candidatesProf.getLastnameE1().isPresent();   // verifying last name field is present displayed
});
Then('The user sees a field for Departure City or State', () => {
    candidatesProf.getDepartureE1().isPresent();   // verifying destination is present displayed
});
Then('The user sees a field for Destination City or State', () => {
    candidatesProf.getDestinationE1().isPresent();   // verifying destination is present displayed
});
Then('The user sees a select drop-down for Level', () => {
    candidatesProf.getLevelE1().isPresent();   // verifying level field is present displayed
});
Then('The user sees a text field for business unit', () => {
    candidatesProf.getBusinessunitE1().isPresent();   // verifying bussiness unit field is present displayed
});
Then('The user sees a Email field', () => {
    candidatesProf.getEmailE1().isPresent();   // verifying email field is present displayed
});
Then('The user sees a Save button to save the record', () => {
    candidatesProf.getSavebuttonE1().isPresent();   // verifying save button is present displayed
});
Then('The user sees a Cancel button to cancel the entire process', () => {
    candidatesProf.getCancelbuttonE1().isPresent();   // verifying cancel button  is present displayed
});
Then('The user sees a Send Invitation To Candidate button to send invitation', () => {
    return candidatesProf.getSendInvitebuttonE1().isPresent();   // verifying send invitation button is present displayed
});


// Scenario: To verify the First Name field in the candidate profile creation page is required

When('The user does not enters text in the First Name field and The user moves to Next Field', async () => {
    await candidatesProf.getFirstnameE1().click()
    await candidatesProf.getLastnameE1().click(); // taking contol to last name field without entring data in first name field
});

Then('The user shown with error message You must enter first name', async () => {
    await candidatesProf.getFirstnamevalidationE1().getText().then(async (text) => {
    var actualFirstNameerror = '';
    actualFirstNameerror = text;
    await expect(actualFirstNameerror).to.equal("You must enter first name");  
});
});

Then('The user enters special characters in the firstname', async () => {
    var text = "";		
	var possible = "!@#$%^&*()_+[]';/.,<>?:{}|\~``;";
	for(var i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));}
    await candidatesProf.getFirstnameE1().sendKeys(text);
    return text;
});

Then('The user shown with error message Special characters not allowed', async () => {
    await candidatesProf.getFirstnamevalidationE2().getText().then(async (text) => {
    var actualFirstNameerror = '';
    actualFirstNameerror = text;
    await expect(actualFirstNameerror).to.equal("Special characters are not allowed");  
});
});

Then('The user enters valid firstname', async () => {
    var text = "";		
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(var i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));}
    await candidatesProf.getFirstnameE1().clear();
    await candidatesProf.getFirstnameE1().sendKeys(text);
    return text;
});

//Scenario: To verify the Last Name field in the candidate profile creation page is required

When('The user does not enters text in the Last Name field and The user moves to Next Field', async () => {
    await candidatesProf.getLastnameE1().click();  // taking contol to destination field without entring data in first name field
    await candidatesProf.getEmailE1().click(); 
});

Then('The user shown with error message You must enter last name', async () => {
    await candidatesProf.getlastnamevalidationE1().getText().then(async (text) => {
    actual = text;
    await expect(actual).to.equal("You must enter last name");  
});
});

Then('The user enters special characters in the lastname', async () => {
    var text = "";		
	var possible = "!@#$%^&*()_+[]';/.,<>?:{}|\~``;";
	for(var i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));}
    await candidatesProf.getLastnameE1().sendKeys(text);
    return text;
});

Then('The user enters valid Last Name', async () => {
    var text = "";		
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(var i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));}
    await candidatesProf.getLastnameE1().clear();
    return candidatesProf.getLastnameE1().sendKeys(text);
});

// Scenario: To verify the user able to select Departure City

When('The user is on add candidate', async ()=> {
    return candidatesProf.getcandidatecreationpopupE1().isDisplayed(); 
});

Then('The user is able to enter in departure field', async ()=> {
    return candidatesProf.getDepartureE1().sendKeys("Chennai, TN");
});


//Scenario: To verify the user able to select/input Destination City

Then('The user clicks but does not enter in destination field', async () => {
    await candidatesProf.getDestinationE1().click();
    return candidatesProf.getDepartureE1().click();
});

Then('The user is shown with error message', async () => {
    await candidatesProf.getDestinationvalidationE1().getText().then(async (text) => {
    actual = text;
    await expect(actual).to.equal("You must select destination");  
});
});

Then('The user is able to enter in destination field', async () => {
    return candidatesProf.getDestinationE1().sendKeys("Danbury, CT");   
});

//Scenario: To verify the user able to select level

When('The user does not select level and The user moves to Next Field', async () => {
    await candidatesProf.getLevelE1().click();
    return browser.actions().doubleClick(candidatesProf.getBusinessunitE1()).perform();  // taking contol to bussiness unit field WITHOUT SELECTING level
});

Then('The user shown with error message you must select Level', async () => {
    await candidatesProf.getlevelvalidationE1().getText().then(async (text) => {
    actual = text;
    return expect(actual).to.equal("You must select level");  
});
});

When('The user selects the level', async () => {
    await candidatesProf.getLevelE1().isDisplayed(); 
    await candidatesProf.getLevelE1().click(); 
    return candidatesProf.getleveldropdownE1().click();  
});

//   Scenario: To verify the user able to enter the text Business Unit

When('The user able to enter the business unit', async () => {
    return candidatesProf.getBusinessunitE1().click();  // taking contol to bussiness unit field WITHOUT SELECTING level
});

Then('The user enters text in the business unit field',async () => {
    var text = "";		
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(var i = 0; i < 10; i++) {
	text += possible.charAt(Math.floor(Math.random() * possible.length));}
    return candidatesProf.getBusinessunitE1().sendKeys(text);
});

// Scenario: To verify the Email field in the candidate profile creation page is required

When('The user does not enters text in the Email field and The user moves to Next Field',async () => {
    await candidatesProf.getEmailE1().click();
    return candidatesProf.getLevelE1().click();  // taking contolout side email field
});

Then('The user shown with error message You must enter candidate email', async () => {
    await candidatesProf.getEmailvalidationE1().getText().then(async (text) => {
    actual = text;
    return expect(actual).to.equal("You must enter email address");  
});
});

Then('The user enters Invalid Email', async () => {
    var text = "";		
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(var i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));}
    await candidatesProf.getEmailE1().sendKeys(text);
    return text    
});

Then('The user shown with error message mail address is not in a valid format', () => {
    candidatesProf.getEmailvalidationE2().getText().then(async (text) => {
    actual = text;
    return expect(actual).to.equal("You must enter a valid email address"); 
});
});

Then('The user enters Valid Email',async () => {
    var text = "";		
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(var i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));}
    text += "@email.com";
    await candidatesProf.getEmailE1().clear();
    return candidatesProf.getEmailE1().sendKeys(text);
});

//Scenario: Save button visibility

When('The user is on add candidate page', async () => {
   return expect(candidatesProf.getcandidatecreationpopupE1().isDisplayed()).to.be.eventually.true; 
});

Then('The user is able to see save draft button', async () => {
    return expect(candidatesProf.getSavebuttonE1().isDisplayed()).to.be.eventually.true;
});


//  Scenario: Send Invitation to the Candidate with all required fields

Then('The user enters data in all required fields and leaves blank optional fields', async () => {    
    await candidatesProf.getFirstnameE1().sendKeys("Offshore");
    await candidatesProf.getLastnameE1().sendKeys("QA");
    await candidatesProf.getEmailE1().sendKeys("tester@test.com");
    await candidatesProf.getLevelE1().click();
    await candidatesProf.getleveldropdownE1().click();
    return candidatesProf.getDestinationE1().sendKeys("Danbury, CT");
});

Then('The user clicks Send Invitation and The Candidate record is added to the grid', async () => {
    return candidatesProf.getSendInvitebuttonE1().click().then(async () =>{
         await candidatesProf.getCandidatesScreenE1().isDisplayed().then(async()=>{
             await candidatesProf.getCandidatesTabE1().isDisplayed().then(async () =>{
                await candidatesProf.getupdatedtotalrecordsE1().isDisplayed();
             })
            
         });
        
    });
});
    

//Scenario: Cancel Candidate creation
When('The user clicks Cancel button',async () => {
    await candidatesProf.getCancelbuttonE1().click();
});

Then('The candidate creation process cancelled',async () => {
    return candidatesProf.getCandidatesScreenE1().isDisplayed();
});

//@mobile scenarios need to be created.