import { browser, element, by, protractor } from 'protractor';
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { EmployeeStatusSummary } from './employee-status-summary.page';

chai.use(chaiAsPromised);
const expect = chai.expect;


let employeeStatusSummary: EmployeeStatusSummary;

Before(() => {
  employeeStatusSummary = new EmployeeStatusSummary();
});


//Given I am logged in as the HR Mobility Manager    
Given('I am logged in as the HR Mobility Manager', async () => {
    return expect(employeeStatusSummary.getUser()).to.eventually.equal('user');
});

//When I navigate to the Dashboard page
When('I navigate to the Dashboard page', async () => {
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {  
        return employeeStatusSummary.get();
    });
});


//\/\/\/\/\/\/ DESKTOP My Dashboard Summary \/\/\/\/\/\/ 
//Then Title of the page should be My Dashboard
Then('Title of the page should be My Dashboard', async () => {
    await browser.driver.manage().window().setSize(1400, 900).then(async () => {
        await element(by.tagName('h1')).getText().then (async value  => {
            return expect(value).to.equals("My Dashboard");
        });
    }); 
});


//Scenario: Title of employee details table verification 
// Then The table having employee details should have the title Employee Details
Then('The table having employee details should have the title Employee Details', async () => {
    await element(by.css('app-employee-details')).element(by.tagName('h2')).getText().then (async value  => {
        return expect(value).to.equals("Employee Details");   
    });
});


//Scenario: User Navigates to the desktop Status Summary Grid:  MCP-13 
Then('I see a grid displaying status summary information', async () => {
    return expect(element(by.className('emp_details')).element(by.className('mat-elevation-z8 mat-table')).isPresent()).to.eventually.be.true;
});


// Scenario: User can see the desktop view of specific move status information: MCP-13 
// Then I see the Employee First Name and Employee Last Name
Then('I see the {string}]', async (employeeName) => {
    return expect(element(by.xpath("//a[contains(text(), " + employeeName + ")]")).isDisplayed()).to.eventually.be.true;
});

// And I see the File Number for the Employee
Then('I see the {string} for the Employee', async (fileNumber) => {
    return expect(element(by.xpath("//a[contains(text(), " + fileNumber + ")]")).isDisplayed()).to.eventually.be.true;
});

// And I see the Employee ID
Then('I see the {string}', async (employeeID) => {
    return expect(element(by.xpath("//a[contains(text(), " + employeeID + ")]")).isDisplayed()).to.eventually.be.true;
});

// And I see the Move Phase (as a number) //this will eventually be replaced with a symbol
Then('I see the {string}', async (movePhaseNumber) => {
    return expect(element(by.xpath("//a[contains(text(), " + movePhaseNumber + ")]")).isDisplayed()).to.eventually.be.true;
});

// And I see a Policy Name
Then('I see a {string}', async (policyName) => {
    return expect(element(by.xpath("//a[contains(text(), " + policyName + ")]")).isDisplayed()).to.eventually.be.true;
});

// And I see a Departure Location
Then('I see a {string}', async (departureLocation) => {
    return expect(element(by.xpath("//a[contains(text(), " + departureLocation + ")]")).isDisplayed()).to.eventually.be.true;
});

// And I see a Destination Location
Then('I see a {string}', async (destinationLocation) => {
    return expect(element(by.xpath("//a[contains(text(), " + destinationLocation + ")]")).isDisplayed()).to.eventually.be.true;
});

// And I see the Effective Transfer Date
Then('I see the {string}', async (effectiveTransferDate) => {
    return expect(element(by.xpath("//a[contains(text(), " + effectiveTransferDate + ")]")).isDisplayed()).to.eventually.be.true;
});

// And I see the Total Cost of Move with Billing Currency Code
Then('I see the {string} with Billing Currency Code', async (totalCostOfMove) => {
    return expect(element(by.xpath("//a[contains(text(), " + totalCostOfMove + ")]")).isDisplayed()).to.eventually.be.true;
});


// Scenario: User sees state-province-canton information if available for Departure Location: MCP-13 
// Then I see the Departure Location
Then('I see the Departure Location with state-province-canton if available {string}', async (deptLocWithSPC) => {
    return expect(element(by.xpath("(//td[@class='mat-cell cdk-column-departure mat-column-departure ng-star-inserted'])[1]"))
        .element(by.xpath("//p[contains(text(), " + deptLocWithSPC + ")]")).isDisplayed()).to.eventually.be.true;
});


// Scenario: User does NOT see state-province-canton information for Departure Location when not available: MCP-13 
// Then I see the Departure Location
Then('I see the Departure Location with state-province-canton if available {string}', async (deptLocNoSPC) => {
    return expect(element(by.xpath("(//td[@class='mat-cell cdk-column-departure mat-column-departure ng-star-inserted'])[1]"))
        .element(by.xpath("//p[contains(text(), " + deptLocNoSPC + ")]")).isDisplayed()).to.equal(false);
});


// Scenario: User sees state-province-canton information if available for Destination Location: MCP-13 
// Then I see the Destination Location
Then('I see the Destination Location with state-province-canton if available {string}', async (destLocWithSPC) => {
    return expect(element(by.xpath("(//td[@class='mat-cell cdk-column-destination mat-column-destination ng-star-inserted'])[1]"))
        .element(by.xpath("//p[contains(text(), " + destLocWithSPC + ")]")).isDisplayed()).to.eventually.be.true;
});


// Scenario: User does NOT see state/province/canton information for Destination Location when not available: MCP-13 
// Then I see the Destination Location
Then('I see the Destination Location with no state-province-canton when not available {string}', async (destLocNoSPC) => {
    return expect(element(by.xpath("(//td[@class='mat-cell cdk-column-destination mat-column-destination ng-star-inserted'])[4]"))
        .element(by.xpath("//p[contains(text(), " + destLocNoSPC + ")]")).isDisplayed()).to.equal(false);
});


// Scenario: User sees alt text for the Move Phase 
// Then I see the following alt text when the Move Phase Indicator is 1: "Current Move Phase is 1 of 5: Pre-Policy Call"
Then('I see the alt text for Pre-Policy Call', async () => {
    return 'pending';
    // await browser.actions().mouseMove(employeeStatusSummary.getMovePhase1El()).perform().then(async () => {
    //      await expect(employeeStatusSummary.getMovePhase1AltEl().isDisplayed()).to.eventually.be.true;
    // });
}); 

// And I see the following alt text when the Move Phase Indicator is 2: "Current Move Phase is 2 of 5: Preparing to Relocate"
Then('I see the alt text for Preparing to Relocate', async () => {
    return 'pending';
    // await browser.actions().mouseMove(employeeStatusSummary.getMovePhase2El()).perform().then(async () => {
    //     await expect(employeeStatusSummary.getMovePhase1AltE2().isDisplayed()).to.eventually.be.true;
    // });
});

// And I see the following alt text when the Move Phase Indicator is 3: "Current Move Phase is 3 of 5: Arriving in New Location"
Then('I see the alt text for Arriving in New Location', async () => {
    return 'pending';
    // await browser.actions().mouseMove(employeeStatusSummary.getMovePhase3El()).perform().then(async () => {
    //     await expect(employeeStatusSummary.getMovePhase3AltEl().isDisplayed()).to.eventually.be.true;
    // });
});

// And I see the following alt text when the Move Phase Indicator is 4: "Current Move Phase is 4 of 5: Living in New Location and Ongoing Assignment"
Then('I see the alt text for Living in New Location', async () => {
    return 'pending';
    // await browser.actions().mouseMove(employeeStatusSummary.getMovePhase4El()).perform().then(async () => {
    //     await expect(employeeStatusSummary.getMovePhase4AltEl().isDisplayed()).to.eventually.be.true;
    // });
});

// And I see the following alt text when the Move Phase Indicator is 5: "Current Move Phase is 5 of 5: Living in New Location and Settled"
Then('I see the alt text for Living in New Location and Settled', async () => {  
    return 'pending';
    // await browser.actions().mouseMove(employeeStatusSummary.getMovePhase5El()).perform().then(async () => {
    //     await employeeStatusSummary.getNextPageEl().click().then(async () => {
    //         await expect(employeeStatusSummary.getMovePhase5AltEl().isDisplayed()).to.eventually.be.true;
    //     });
    // });
});
