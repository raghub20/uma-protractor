import { browser, element, by, promise, ElementFinder, protractor } from 'protractor';
import _ from 'lodash';
export class ApprovedMoves {
    get() {
        return browser.get('http://localhost:4202/');
        //return browser.get('/#/project-alpha');
    }

    async getHeader(headerName: string): Promise<ElementFinder> {
        return await element(by.cssContainingText('button.mat-sort-header-button', headerName));
    }

    async performSort(headerName: string, sortType) {
        let headerEle = await this.getHeader(headerName);
        if(sortType == 'asceding') {
            await headerEle.click();
        } else {
            await headerEle.click();
            await headerEle.click();
        }    
    }

    async getHeaderIndex(headerName) {
        let headers: ElementFinder[] = await element.all(by.css('.mat-table thead th .mat-sort-header-button'));
        let headerIndex;
        for(let i=0; i<headers.length; i++) {
            let currentHeaderName = await headers[i].getText();
            if(headerName == currentHeaderName) {
                headerIndex = i + 1;
                break;
            }
        }
        return headerIndex;
    }

    async verifySortedNumbers(columnIndex, sortType) {
        if(sortType == 'asceding') {
            let amountText = await element(by.xpath('//table//tbody//tr[1]//td[3]')).getText();
            if(amountText != undefined) {
                amountText = amountText.replace('USD', '').replace(',','').trim();
            }
            console.log("amount text = " + amountText);
        }
    }

    async verifyTableNumberData(columnIndex, sortType) {
        let rows: ElementFinder[] = await element.all(by.css('.mat-table tbody tr'));
        for(let i=0; i<rows.length; i++) {

        }
    }

    async verifyTableNumberSortData(columnIndex, sortType) {
        let rows: ElementFinder[] = await element.all(by.css('.mat-table tbody tr'));
        let previousNumber;
        for(let i=0; i<rows.length; i++) {
            let row: ElementFinder = rows[i];
            let columns: ElementFinder[] = await row.all(by.tagName('td'));
            let currentNumberStr = await columns[columnIndex].getText();
            let numbersStr = currentNumberStr.split(' ')[0];
            numbersStr.replace(',', '');
            let currentNumber = parseFloat(numbersStr);
            if(sortType == 'asceding' && i>0) {
                if(previousNumber>=currentNumber) {
                    return false;
                }
            } else if(i>0) {
                if(previousNumber>=currentNumber) {
                    return false;
                }
            }
        }
        return true;
    }

    async getApprovedMovesTableBody() {
        return await element.all(by.css('.mat-table tbody tr'));
    }

    async verifyTableSortData(headerName, sortType) {
        let rows: ElementFinder[] = await this.getApprovedMovesTableBody();
        let columnIndex = await this.getHeaderIndex(headerName);
        let previousText = '';
        for(let i=0; i<rows.length; i++) {
            let row: ElementFinder = rows[i];
            let columns: ElementFinder[] = await row.all(by.tagName('td'));
            let columnText = await columns[columnIndex].getText();
            if(headerName == 'Authorized/Remaining Amount') {
                return this.verifyTableNumberSortData(columnIndex, sortType);
            }
            if(sortType == 'asceding') {
                if(i>0) {
                    if(previousText.localeCompare(columnText) == 1) {
                        console.log("previous text = " + previousText);
                        console.log("current text = " + columnText);
                        return false;
                    }
                }
            } else {
                if(i>0) {
                    if(previousText.localeCompare(columnText) == -1) {
                        console.log("previous text = " + previousText);
                        console.log("current text = " + columnText);
                        return false;
                    }
                }
            }
            previousText = columnText;
        }
        return true;
    }

    /**
     * This function will verify the given text is matched in each row either pariatlly or fully.
     * @param expectedText : string - The target value which we want to check whether displayed in approved moves table or not.
     */
    async verifyTextInApprovedMovesTable(expectedText: string) {
        let rows : ElementFinder[] = await this.getApprovedMovesTableBody();
        let isMatched = false;
        for(let i=0; i<rows.length; i++) {
            isMatched = false;
            let columns: ElementFinder[] = await rows[i].all(by.tagName('td'));
            for(let j=0; j<columns.length; j++) {
                let columnText = await columns[j].getText();
                if(columnText.toLowerCase().includes(expectedText.toLowerCase())) {
                    isMatched = true;
                    break;
                }
            }
            if(!isMatched) {
                return false;
            }
        }
        return true;
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
            return element(by.css('[ng-reflect-placeholder="Search within table for..."]'));
     }
searchForItem( searchItem: string) {
   this.searchItemInput().sendKeys(searchItem);
   return this.searchItemInput().sendKeys(protractor.Key.ENTER);
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