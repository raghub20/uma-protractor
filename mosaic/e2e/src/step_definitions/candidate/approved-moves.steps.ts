import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { ApprovedMoves } from './approved-moves.page';
import { browser } from 'protractor';
import { async } from 'q';

chai.use(chaiAsPromised);
const expect = chai.expect;

let approvedmoves: ApprovedMoves;
let actual: string;
Before(() => {
  approvedmoves= new ApprovedMoves();
});

Given('the User Navigates to Transferee’s Profile View', async () => {
  await approvedmoves.get();
  //await browser.sleep(3000);
  await approvedmoves. getApprovedMovesTab().click(); 
     //await browser.sleep(3000) ;// clicking candidate tab
  await approvedmoves.getApprovedMovesView().isDisplayed();   // verifying candidates screen displayed
});

  
    
 // Scenario: Verify the information presented in the transferee’s profile view

      Then('the Full Name is displayed', async () => {
        return approvedmoves.getfullname().isDisplayed();
      });
      Then('Departure is displayed', async () => {
        //await browser.sleep(3000);
        return approvedmoves.getdeparture().isDisplayed();
      });
      Then('Destination is displayed', async () => {

        return approvedmoves. getdesination().isDisplayed();
      });

      Then('Status is dispalyed', async () => {
        return approvedmoves.getstatus().isDisplayed();
      });
       Then('Authorized Amount  is displayed', async () => {
        return approvedmoves.getauthorizedamount().isDisplayed();   
      });
      Then('search box is displayed', async () => {
         return approvedmoves.searchItemInput().isDisplayed();
       });
       Then('search for item as {string}', async (searchitem) => {
         return approvedmoves.searchForItem("75,000");
       });
     // Scenario: Verify the ability to sort the data
    //  When('the user clicks on sort symbol on Field Name', async () => {
    //    return approvedmoves.getsortsymbolfullname().click();
    //  });//when field name works then write code
     
    When('the user clicks on sort symbol on AuthorizationAmount', async () => {
       return approvedmoves.getsortsymbolauthorizedamount().click();
       });
    
    Then('the list is sorted field AuthorizationAmount', async () => {
   // await expect(true).to.equal(approvedmoves.getAllAuthorizedAmountList());
      return approvedmoves.getAllAuthorizedAmountList();
          });

    When('the user clicks on sort symbol on field Departure', async() => {
      return approvedmoves.getsortsymboldeparture();
         });

   Then('the list is sorted field Departure', async() => {
    return approvedmoves.getAllDepartureList();
         });
  When('the user clicks on sort symbol on field Desination',  async() => {
     return approvedmoves.getsortsymboldeparture().click();
        });
  Then('the list is sorted field Destination', async () => {
    return approvedmoves.getAllDestinationList();
          await browser.sleep(3000);
         });
 When('the list clicks on sort symbol on field status', async() => {
    return approvedmoves.getsortsymbolstatus().click();
         });

  Then('the list is sorted field Status', async () => {
        return approvedmoves.getAllStatusList();
          });
  
  Then('click the arrow to see pages', async () => {
    return approvedmoves.getpagearrow().click();
          });
        
  Then('select the page number', async () => {
    return approvedmoves.getselectedpagenum().click();            
          });
  Then('click the Next Pages', async () => {
    return approvedmoves.getNextPage().click();
      });

  

