import { browser, element, by } from 'protractor';
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { AggregateViewDestinationCountry } from './aggregate-view-destination-country.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let aggViewDestCountry: AggregateViewDestinationCountry;

Before(() => {
    aggViewDestCountry = new AggregateViewDestinationCountry();
});


// Scenario: User navigates the site and views the aggregated dashboard - desktop: MCP-61 
// Given I am a logged in user
Given('I am a logged in as a user looking at the Aggregate dashboard', async () => {    
    return expect(aggViewDestCountry.getUser()).to.eventually.equal('user');
});

// When I am on the Employee summary dashboard
When('I am on the Employee dashboard - Aggregate Destination Country', async () => {
    return aggViewDestCountry.get(); 
});

// Then I see an area where the aggregate page content will be displayed
Then('I see an area where the aggregate page content will be displayed', async () => {
    return expect(aggViewDestCountry.getAggragationGridEl().isDisplayed()).to.eventually.be.true;
});

// Then I see a Dashboard View configuration module
Then('I see a Dashboard View configuration module', async () => {
    //Insert steps here to navigate to the aggregae view once it is available - MCP-145
    //--> INSERT NAVIGATION AND TESTS HERE <--
});

// And I can click on the settings icon
Then('I can click on the settings icon', async() => {
    //Insert steps here to navigate to the aggregae view once it is available - MCP-145
    //--> INSERT NAVIGATION AND TESTS HERE <--
});

// And I select aggregation view destination country option
Then('I select aggregation view destination country option', async() => {
    //Insert steps here to navigate to the aggregae view once it is available - MCP-145
    //--> INSERT NAVIGATION HERE <--
});

// Then I am returned to the dashboard
Then('I am returned to the dashboard with the aggregated view visible',  async () => {
    await aggViewDestCountry.getDetailsDestCountHeaderEl().isDisplayed().then(async () => {
         await expect(aggViewDestCountry.getAggragationGridEl().isDisplayed()).to.eventually.be.true;
     });
});

// And I see a placeholder for KPIs at the top of the screen
Then('I see a placeholder for KPIs at the top of the screen',  async() => {
    await aggViewDestCountry.getKPIOneEl().isDisplayed().then(async () => {
        await aggViewDestCountry.getKPITwoEl().isDisplayed().then(async () => {
            await expect(aggViewDestCountry.getKPIThreeEl().isDisplayed()).to.eventually.be.true;
        });
    });
});

// And I see Country in the Dashboard Data displayed
Then('I see Country in the Dashboard Data displayed', async() => {
    await aggViewDestCountry.getCountryHdrEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getCountrySortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getCountrySortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});

// And I see Number of active employees that are being aggregated
Then('I see Number of active employees that are being aggregated', async() => {
    await aggViewDestCountry.getActiveEmpHdrEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getActiveEmpSortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getActiveEmpSortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});

// And I see Total YTD costs for the aggregated employees
Then('I see Total YTD costs for the aggregated employees', async() => {
    await aggViewDestCountry.getCurYTDCostHdrEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getCurYTDCostSortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getCurYTDCostSortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});

// And I see Prior YTD costs for the aggregated employees
Then('I see Prior YTD costs for the aggregated employees',  async() => {
    await aggViewDestCountry.getPastYTDCostEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getPastYTDCostSortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getPastYTDCostSortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});

// And I see Percentage change of the costs year over year
Then('I see Percentage change of the costs year over year',  async() => {
    await aggViewDestCountry.getPerTotCostEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getPerTotCostSortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getPerTotCostSortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});


// Scenario: User navigates the site and views the aggregated dashboard - Mobile: MCP-61
// Then I see an area where the aggregate page content will be displayed
Then('I see a mobile area where the aggregate page content will be displayed', async () => {
    return expect(aggViewDestCountry.getAggragationGridEl().isDisplayed()).to.eventually.be.true;
});

// Then I see a mobile Dashboard View configuration module
Then('I see a mobile Dashboard View configuration module', async () => {
    //Insert steps here to navigate to the aggregae view once it is available - MCP-145
    //--> INSERT NAVIGATION AND TESTS HERE <--
});

// And I can click on the mobile settings icon
Then('I can click on the mobile settings icon', async() => {
    //Insert steps here to navigate to the aggregae view once it is available - MCP-145
    //--> INSERT NAVIGATION AND TESTS HERE <--
});

// And I select mobile aggregation view destination country option
Then('I select mobile aggregation view destination country option', async() => {
    //Insert steps here to navigate to the aggregae view once it is available - MCP-145
    //--> INSERT NAVIGATION AND TESTS HERE <--
});

// Then I am returned to the mobile dashboard
Then('I am returned to the mobile dashboard with the aggregated view visible',  async () => {
    await aggViewDestCountry.getDetailsDestCountHeaderEl().isDisplayed().then(async () => {
        await expect(aggViewDestCountry.getAggragationGridEl().isDisplayed()).to.eventually.be.true;
    });
});

// And I see a placeholder for KPIs at the top of the mobile screen
Then('I see a placeholder for KPIs at the top of the mobile screen',  async() => {
    await aggViewDestCountry.getKPIBlockEl().isDisplayed().then(async () => {
        await aggViewDestCountry.getKPIOneEl().isDisplayed().then(async () => {
            await aggViewDestCountry.getKPITwoEl().isDisplayed().then(async () => {
                await expect(aggViewDestCountry.getKPIThreeEl().isDisplayed()).to.eventually.be.true;
            });
        });
    });                  
});

// And I see Country in the mobile Dashboard Data displayed
Then('I see Country in the Dashboard Data displayed in mobile',   async() => {
    await aggViewDestCountry.getCountryHdrEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getCountrySortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getCountrySortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});

// And I see Number of active employees that are being aggregated in mobile 
Then('I see Number of active employees that are being aggregated in mobile', async() => {
    await aggViewDestCountry.getActiveEmpHdrEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getActiveEmpSortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getActiveEmpSortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});

// And I see Total YTD costs for the aggregated employees in mobile
Then('I see Total YTD costs for the aggregated employees in mobile', async() => {
    await aggViewDestCountry.getCurYTDCostHdrEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getCurYTDCostSortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getCurYTDCostSortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});

// And I see Prior YTD costs for the aggregated employees in mobile 
Then('I see Prior YTD costs for the aggregated employees in mobile',  async() => {
    await aggViewDestCountry.getPastYTDCostEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getPastYTDCostSortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getPastYTDCostSortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});

// And I see Percentage change of the costs year over year in mobile
Then('I see Percentage change of the costs year over year in mobile',  async() => {
    await aggViewDestCountry.getPerTotCostEl().isDisplayed().then(async () => {
        await browser.actions().mouseMove(aggViewDestCountry.getPerTotCostSortEl()).perform().then(async () => {
            await expect(aggViewDestCountry.getPerTotCostSortEl().isDisplayed()).to.eventually.be.true;
        });
    });
});


