import { browser, element, by, promise, ElementFinder } from 'protractor';

export class AggregateViewLayout {
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
        return element(by.css('.aggregationView'));
    }
    
    getAggViewSearchEl(): ElementFinder {
        return element(by.xpath("//input[@placeholder='Search with in table for...']"));
    }

    getAggViewFilterEl(): ElementFinder {
        return element(by.xpath("//span[contains(text(),'filter_list')]"));
    }

    getAggViewColumnEl(): ElementFinder {
        return element(by.xpath("//span[contains(text(),'view_column')]"));
    }

    getKPIBlockEl(): ElementFinder {
        return element(by.className('kpi-block'));
    }

}