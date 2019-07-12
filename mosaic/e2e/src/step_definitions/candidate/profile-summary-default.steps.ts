import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Defaultcolumn } from './profile-summary-default.page';


chai.use(chaiAsPromised);
const expect = chai.expect;
let defaultcolumn: Defaultcolumn;

Before(() => {
    defaultcolumn = new Defaultcolumn();
});

//1) Scenario: To verify client able to view profiles of all candidates created for the client

         Given('The user is on the candidate profiles page for all candidates', function () {
           return defaultcolumn.get();
         });


         Then('The client sees profiles of all candidates', function () {
           return defaultcolumn.getcandidates().isDisplayed();
         });

   

//2) Scenario: To verify the default information displayed


         Then('client sees Candidate first name and last name', function () {
           defaultcolumn.getfirstlastname().getText().then(async(text)=>{
               console.log(text);
           })
         });


         Then('Client sees Level', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

         Then('Client sees Departure City and State', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('client sees Destination City and State', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('Client sees Status', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


//3) Scenario: To verify sort of all columns available in summary


         When('Client clicks on Candidate name sort', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('The candidate name should be sortable', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         When('Client clicks on Level sort', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('The Level should be sortable', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         When('Client clicks on Departure City and State sort', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('The Departure City and State should be sortable', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         When('Client clicks on Destination City and State sort', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });



         Then('The Destination City and State should be sortable', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         When('Client clicks on Status sort', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('The Status should be sortable', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });



         When('Client clicks on Status date sort', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

 

         Then('The Status date should be sortable', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         When('Client clicks on Invitation sent date sort', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('The Invitation sent date should be sortable', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });



         When('Client clicks on created by sort', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('The created by should be sortable', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


//4) Scenario: To verify client able to inactivate candidate record


         When('Client inactivates a candidate record', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });



         Then('The candidate record becomes inactive', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   

//5) Scenario: To verify if client able to navigate to a candidate profile

  

         When('Client navigates to a candidate profile', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


         Then('Client sees the candidate profile', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });