import { browser, element, by } from 'protractor';
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { AggregateViewLayout } from './aggregate-view-layout.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let aggregateViewLayout: AggregateViewLayout;

// Scenario: User navigates the site and views the aggregated dashboard - desktop: MCP-205 
// Given I am a logged in user

Before(() => {
    aggregateViewLayout = new AggregateViewLayout();
});

Given('I am a logged in user looking at the Aggragate Layout', () => {
    return expect(aggregateViewLayout.getUser()).to.eventually.equal('user');
});

// When I am on the Employee summary dashboard
When('I am on the Employee summary dashboard - Aggregate Layout', () => {
    return aggregateViewLayout.get(); 
});

// Then I see a defined area to display aggregate page content
Then('I see a defined area to display aggregate page content', async () => {
    return expect(aggregateViewLayout.getAggragationGridEl().isDisplayed()).to.eventually.be.true;
});

// And I see a defined area to display one or more KPIs
Then('I see a defined area to display one or more KPIs', async() => {
    await expect(aggregateViewLayout.getKPIBlockEl().isDisplayed()).to.eventually.be.true;
});

// And I see a defined area to display search of aggregated data
Then('I see a defined area to display search of aggregated data', async() => {
    await aggregateViewLayout.getAggViewSearchEl().isDisplayed().then(async () => {
         await aggregateViewLayout.getAggViewFilterEl().isDisplayed().then(async () => {
              await expect(aggregateViewLayout.getAggViewColumnEl().isDisplayed()).to.eventually.be.true;
        });
    });
});



// Scenario: User navigates the site and views the aggregated dashboard - mobile: MCP-205 
// Then I see a defined area to display aggregate mobile page content
Then('I see a defined area to display aggregate mobile page content', async() => {
    await browser.driver.manage().window().setSize(500, 900).then(async () => {
         await expect(aggregateViewLayout.getAggragationGridEl().isDisplayed()).to.eventually.be.true;
    });
});
     
// And I see a defined area to display one KPI
Then('I see a defined area to display one KPI', async() => {
    await expect(aggregateViewLayout.getKPIBlockEl().isDisplayed()).to.eventually.be.true;
});

// And I see a defined area to display the mobile aggregate data search
Then('I see a defined area to display the mobile aggregate data search', async() => {
    await aggregateViewLayout.getAggViewSearchEl().isDisplayed().then(async () => {
         await aggregateViewLayout.getAggViewFilterEl().isDisplayed().then(async () => {
              await expect(aggregateViewLayout.getAggViewColumnEl().isDisplayed()).to.eventually.be.true;
         });
    });
});
