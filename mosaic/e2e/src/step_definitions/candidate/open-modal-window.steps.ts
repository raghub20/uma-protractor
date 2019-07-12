import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { OpenModalPage } from './open-modal-window.page';


chai.use(chaiAsPromised);
const expect = chai.expect;

let openmodalpage: OpenModalPage;

Before(() => {
  openmodalpage = new OpenModalPage();
});

//1) Scenario: To verify clickable records and view modal window 

         Given('The client is on the candidate profile summary page', async function () {
           return openmodalpage.get();
           //return openmodalpage.getCandidatesScreenE1().isPresent();
         });

         When('The client clicks “Invitation Sent - Resend” status record of any candidate', async function () {
           await openmodalpage.getinvitationsentresendE1().click();
         });

         Then('The client is able to see modal window for invitation resend', async function () {
          return openmodalpage.getmodalwindowforresendE1().isPresent()
         });

         When('The client clicks “Ready for Review” status record of any candidate', async function () {
           await openmodalpage.getreadyforreviewE1().click();
         });

         Then('The client is able to see modal window for ready for review', async function () {
          return openmodalpage.getmodalwindowforreadyforreview().isPresent();
         });

//2) Scenario: To verify non clickable records


         When('“Assessment In Progress” status is not a hyperlink', async function () {
           return expect(openmodalpage.getassessmentinprogressE1().getTagName()).to.be.eventually.not.equals('a');
         });

         When('“Invitation Not Sent” status is not a hyperlink', async function () {
           return expect(openmodalpage.getInvitationnotsentE1().getTagName()).to.be.eventually.not.equals('a');
         });

         When('“Pending Van Line Quote” status is not a hyperlink', async function () {
           return expect(openmodalpage.getPendingVanLineE1().getTagName()).to.be.eventually.not.equals('a');
         });