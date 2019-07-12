import { browser, element, by, promise, ElementFinder } from 'protractor';

export class AggregateViewDestinationCountry {
    
    get(): promise.Promise<any> {
        return browser.get('/');
    }

    getUser(): promise.Promise<any> {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }

    getTitle(): ElementFinder {
        return element(by.tagName('h1'));
    }
    
    getAggragationGridEl(): ElementFinder {
        return element(by.className('aggregationView'));
    }

    getDetailsDestCountHeaderEl(): ElementFinder {
        return element(by.xpath("//h2[contains(text(),'Details by Destination Country')]"));
    }

    getKPIBlockEl(): ElementFinder {
        return element(by.className('kpi-block'));
    }

    getKPIOneEl(): ElementFinder {
        return element(by.xpath("(//div[@class='kpi-item'])[1]"));
    }

    getKPITwoEl(): ElementFinder {
        return element(by.xpath("(//div[@class='kpi-item'])[2]"));
    }

    getKPIThreeEl(): ElementFinder {
        return element(by.xpath("(//div[@class='kpi-item'])[3]"));
    }

    getCountryHdrEl(): ElementFinder {
        return element(by.cssContainingText('button', ' Country '));
    }

    getCountrySortEl(): ElementFinder {
        return element(by.xpath("(//div[@class='mat-sort-header-stem'])[1]")); 
    }

    getActiveEmpHdrEl(): ElementFinder {
        return element(by.xpath("//button[contains(text(),' Active Employees ')]"));
    }

    getActiveEmpSortEl(): ElementFinder {
        return element(by.xpath("(//div[@class='mat-sort-header-stem'])[2]"));
    }

    getCurYTDCostHdrEl(): ElementFinder {
        return element(by.xpath("//button[contains(text(),' Current YTD Costs ')]"));
    }

    getCurYTDCostSortEl(): ElementFinder {
        return element(by.xpath("(//div[@class='mat-sort-header-stem'])[3]"));
    }

    getPastYTDCostEl(): ElementFinder {
        return element(by.xpath("//button[contains(text(),' Past YTD Costs ')]"));
    }

    getPastYTDCostSortEl(): ElementFinder {
        return element(by.xpath("(//div[@class='mat-sort-header-stem'])[4]"));
    }

    getPerTotCostEl(): ElementFinder {
        return element(by.xpath("//button[contains(text(),' %Change of Total Cost ')]"));
    }

    getPerTotCostSortEl(): ElementFinder {
        return element(by.xpath("(//div[@class='mat-sort-header-stem'])[5]"));
    }

}