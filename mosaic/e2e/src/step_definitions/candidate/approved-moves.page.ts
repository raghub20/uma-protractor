import { browser, element, by, promise, ElementFinder, protractor, ExpectedConditions as EC} from 'protractor';
import _ from 'lodash';
export class ApprovedMoves {
    get() {
        return browser.get('http://localhost:4202/');
        //return browser.get('/#/project-alpha');
    }

    async getHeader(headerName: string): Promise<ElementFinder> {
        return await element(by.cssContainingText('button.mat-sort-header-button', headerName));
    }

    getNextPage(): ElementFinder {
        return element(by.xpath("//button[@class='mat-paginator-navigation-next mat-icon-button']"));
     }

    async performSort(headerName: string, sortType: string) {
        let headerEle = await this.getHeader(headerName);
        if(sortType == 'asceding') {
            await headerEle.click();
        } else {
            await headerEle.click();
            await headerEle.click();
        }    
    }
    searchItemInput(): ElementFinder {
        return element(by.css('[ng-reflect-placeholder="Search within table for..."]'));
    }
    /**
     * This function will return the position of the given header in approved moves table.
     * @param headerName : Name of the header name in the approved moves table. 
     */
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

    /**
     * This function will verify the sort data based on numbers.
     * @param columnIndex : The target column for perform data verification.
     * @param sortType : Type of the sort method. either ascending or decending.
     */
    async verifyTableNumberSortData(columnIndex, sortType) {
        let rows: ElementFinder[] = await this.getApprovedMovesTableBody(); ////*[@class="mat-table"]//tbody/tr
        let previousNumber;
        for(let i=0; i<rows.length; i++) {
            let row: ElementFinder = rows[i];
            let columns: ElementFinder[] = await row.all(by.tagName('td'));
            let currentNumberStr = await columns[columnIndex].getText();
            let numbersStr = currentNumberStr.split(' ')[0];
            numbersStr = numbersStr.replace(',', '');
            let currentNumber = parseFloat(numbersStr);
            if(sortType == 'asceding' && i>0) {
                if(previousNumber>currentNumber) {
                    return false;
                }
            } else if(i>0) {
                if(previousNumber<currentNumber) {
                    return false;
                }
            }
        }
        return true;
    }

    async getApprovedMovesTableBody() {
        return await element.all(by.css('.mat-table tbody tr'));
    }

    searchForItem( searchItem: string) {
        this.searchItemInput().sendKeys(searchItem);
        return this.searchItemInput().sendKeys(protractor.Key.ENTER);
     }

    async verifyTableSortData(headerName, sortType) {
        let rows: ElementFinder[] = await this.getApprovedMovesTableBody();
        let columnIndex = await this.getHeaderIndex(headerName);
        let previousText = '';
        for(let i=0; i<rows.length; i++) {
            let row: ElementFinder = rows[i];
            let columns: ElementFinder[] = await row.all(by.tagName('td'));
            let columnText = await columns[columnIndex].getText();
            if(headerName == 'Authorized Amount') {
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

    async getItemPerPageDropdownAllEle(): Promise<ElementFinder[]> {
        return await element.all(by.css('[id^="mat-select-"]'));
      }
    
    async selectItemPerPage(noOfItems: string, index=0): Promise<void> {
        let itemElements: ElementFinder[] = await this.getItemPerPageDropdownAllEle();
        await itemElements[index].click();
        return element(by.cssContainingText('.mat-option-text', noOfItems)).click();
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

    async getViewColumnEle() {
        return await element(by.xpath('//mat-icon[text()="view_column"]'));
    }

    async waitForTableColumnsToLoad() {
        return await browser.wait(EC.visibilityOf(element(by.cssContainingText('h2', 'Select Columns'))), 5000);
    }

    async getColumnCheckboxEle(columnName:string) {
        let root = await element(by.xpath('//span[text()="' + columnName + '"]//ancestor::mat-checkbox'));
        return {
            root : root,
            input : root.element(by.tagName('input')),
            label : root.element(by.tagName('label'))
        }
    }

    async getApprovedMovesTableEle(index=0) {
        let table = await element.all(by.tagName('table')).get(index);
        let rows = await table.all(by.css('tbody tr'));
        let headers = await table.all(by.css('thead th'));
        return {
            root : table,
            rows : rows,
            headers : headers
        }
    }

    async getButtonEle(buttonText: string) {
        let el = await element(by.buttonText(buttonText));
        return el;
    }
    
    async getResetButton() {
        return await element(by.cssContainingText('span','RESET'));
    }
}