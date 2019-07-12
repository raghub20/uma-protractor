import { browser, element, by, promise, ElementFinder } from 'protractor';

import _ from 'lodash';
import { Then } from 'cucumber';
export class ApprovedMoves {
  
  get() {
        return browser.get('/#/project-alpha');
    }
    getUser() {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }
    getApprovedMovesTab(): ElementFinder{
        return element(by.xpath("//a[contains(text(),' Approved Moves ')]"));
    }
    getApprovedMovesView():ElementFinder{
        return element(by.css("h2"));
    }
    getfullname():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Full Name "));
    }
    getdeparture():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Departure "));
    }
    getdesination():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Destination "));
    }
    getstatus():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Status "));
    }
    getauthorizedamount():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Authorized Amount "));
    }
    getsortsymbolfullname():ElementFinder{
        return element(by.xpath("(//div[@class='mat-sort-header-stem'])[1]")); 
    }
    getsortsymbolauthorizedamount():ElementFinder{
        return element(by.xpath("(//div[@class='mat-sort-header-stem'])[2]")); 
    }
    getsortsymboldeparture(): ElementFinder{
        return element(by.xpath("(//div[@class='mat-sort-header-stem'])[3]"));
    }
    getsortsymbolstatus(): ElementFinder{
        return element(by.xpath("(//div[@class='mat-sort-header-stem'])[4]"));
    }
    // getpagearrow(): ElementFinder {
    //     return element(by.xpath("(//div[@class='mat-select-arrow']"));
    //     }
        
    async getAllDestinationList() {
        let destinationArr=[];
        let sortedArr = [];
        await element.all(by.css('.mat-cell.cdk-column-destination.mat-column-destination.ng-star-inserted')).map(function(row){
            row.getText().then(function(text){
                destinationArr.push(text);
            });
        });
        sortedArr = destinationArr.sort();
    
        return _.isEqual(destinationArr, sortedArr);
    }


    searchItemInput(): ElementFinder {
            return element(by.css('.mat-input-element.mat-form-field-autofill-control.cdk-text-field-autofill-monitored'));
     }
searchForItem( searchItem: string) {
   this.searchItemInput().sendKeys(searchItem);
}
//searchForItem(): ElementFinder {
   // return element(by.)
//}

    // departure ('.mat-cell.cdk-column-departure.mat-column-departure.ng-star-inserted')
    async getAllDepartureList() {
        let DepartureArr=[];
        let sortedArr = [];
        await  element.all(by.css('.mat-cell.cdk-column-departure.mat-column-departure.ng-star-inserted')).map(function(row){
            row.getText().then(function(text){
                DepartureArr.push(text);
            });
        });
        sortedArr = DepartureArr.sort();
        return _.isEqual(DepartureArr, sortedArr);
    }

    // AA ('.mat-cell.cdk-column-authorizedAmount.mat-column-authorizedAmount.ng-star-inserted')
    async getAllAuthorizedAmountList() {
        let AuthorizedAmountArr=[];
        let sortedArr = [];
        await  element.all(by.css('.mat-cell.cdk-column-departure.mat-column-departure.ng-star-inserted')).map(function(row){
            row.getText().then(function(text){
                AuthorizedAmountArr.push(text);
            });
        });
        sortedArr = AuthorizedAmountArr.sort();
        return _.isEqual(AuthorizedAmountArr, sortedArr);
        }
// status ('.mat-cell.cdk-column-status.mat-column-status.ng-star-inserted.mat-table-sticky')
async getAllStatusList() {
    let StatusArr=[];
    let sortedArr = [];
    await  element.all(by.css('.mat-cell.cdk-column-status.mat-column-status.ng-star-inserted.mat-table-sticky')).map(function(row){
        row.getText().then(function(text){
            StatusArr.push(text);
        });
    });
    sortedArr = StatusArr.sort();
    return _.isEqual(StatusArr, sortedArr);
}
// xpath for list of page //div[@class='mat-select-arrow']
getpagearrow(): ElementFinder {
    return element(by.xpath("//div[@class='mat-select-arrow']"));
}

// getlistofpage(): ElementFinder {
// return element(by.xpath("//div[@class='mat-select-arrow-wrapper']"));
// }
// }
 getselectedpagenum(): ElementFinder {
   return element(by.xpath("//span[@class='mat-option-text'and text()='5']"));
 }

getNextPage(): ElementFinder {
   return element(by.xpath("//button[@class='mat-paginator-navigation-next mat-icon-button']"));
}
}

//button.mat-paginator-navigation-next mat-icon-button//csscont (xpath)
//cssContainingText("button.mat-sort-header-button"," Authorized Amount "
//cssContainingText("button.mat-paginator-navigation-next mat-icon-button","Next page")