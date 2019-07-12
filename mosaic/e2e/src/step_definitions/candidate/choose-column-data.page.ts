import { browser, element, by, promise, ElementFinder } from 'protractor';

var count: number = 2;
var uncount: number = 10
export class Choosecolumn {
    
    get(): promise.Promise<any> {
        return browser.get('/#/project-alpha/candidate-profiles');
    }

    getUser(): promise.Promise<any> {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }
    getcolumnfiltericon():ElementFinder{
        return element(by.css("mat-icon.viewsetting-icon"));
    }
    getcolumnfilterpopup():ElementFinder{
        return element(by.css("app-candidate-columns"));
    }
    getLevel():ElementFinder{
        return element.all(by.css("div.mat-checkbox-inner-container")).get(9);
    }
    getDeparture():ElementFinder{
        return element.all(by.css("div.mat-checkbox-inner-container")).get(11);
    }
    getDestination():ElementFinder{
        return element.all(by.css("div.mat-checkbox-inner-container")).get(12);
    }
    getbusinessunit():ElementFinder{
        return element.all(by.css("div.mat-checkbox-inner-container")).get(10);
    }
    getemail():ElementFinder{
        return element.all(by.css("div.mat-checkbox-inner-container")).get(8);
    }
    getstatusdate():ElementFinder{
        return element.all(by.css("div.mat-checkbox-inner-container")).get(13);
    }
    getinvitationsent():ElementFinder{
        return element.all(by.css("div.mat-checkbox-inner-container")).get(14);
    }
    getcreatedby():ElementFinder{
        return element.all(by.css("div.mat-checkbox-inner-container")).get(15);
    }
    getApplyfilter():ElementFinder{
        return element(by.cssContainingText("button.contained-button","OK"));
    }
    getReset():ElementFinder{
        return element(by.cssContainingText("span.mat-button-wrapper","RESET"));
    }
    getfirstcolumn():ElementFinder{
        return element.all(by.css("button.mat-sort-header-button")).get(0);
    }
    getlastcolumn():ElementFinder{
        return element.all(by.css("button.mat-sort-header-button")).last();
    }
    getlevelstatus():ElementFinder{
        return element(by.xpath("(//input[@class='mat-checkbox-input cdk-visually-hidden'])[10]"));
    }
    getdeparturestatus():ElementFinder{
        return element(by.xpath("(//input[@class='mat-checkbox-input cdk-visually-hidden'])[12]"));
    }
    getdestinationstatus():ElementFinder{
        return element(by.xpath("(//input[@class='mat-checkbox-input cdk-visually-hidden'])[13]"));
    }
    getbusinessstatus():ElementFinder{
        return element(by.xpath("(//input[@class='mat-checkbox-input cdk-visually-hidden'])[11]"));
    }
    getemailstatus():ElementFinder{
        return element(by.xpath("(//input[@class='mat-checkbox-input cdk-visually-hidden'])[9]"));
    }
    getstatusdatestatus():ElementFinder{
        return element(by.xpath("(//input[@class='mat-checkbox-input cdk-visually-hidden'])[14]"));
    }
    getinvitationstatus():ElementFinder{
        return element(by.xpath("(//input[@class='mat-checkbox-input cdk-visually-hidden'])[15]"));
    }
    getcreatedbystatus():ElementFinder{
        return element(by.xpath("(//input[@class='mat-checkbox-input cdk-visually-hidden'])[16]"));
    }
    getverifylevel():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Level "));
    }
    getverifydeparture():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Departure "));
    }
    getverifydestination():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Destination "));
    }
    getverifybusinessunit():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Business Unit "));
    }
    getverifyfullname():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Full Name "));
    }
    getverifystatus():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Status "));
    }
    getverifyemail():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Email "));
    }
    getverifystatusdate():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Status Date "));
    }
    getverifyinvitation():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Invitation Sent Date "));
    }
    getverifycreatedby():ElementFinder{
        return element(by.cssContainingText("button.mat-sort-header-button"," Created By "));
    }
    getfullname():ElementFinder{
        return element.all(by.css("span.mat-checkbox-label")).get(10);
    }
    getfullnamedisabled():ElementFinder{
        return element.all(by.css("mat-checkbox.mat-checkbox-checked.mat-checkbox-disabled")).get(0);
    }
    getstatus():ElementFinder{
        return element.all(by.css("span.mat-checkbox-label")).get(11);
    }
    getstatusdisabled():ElementFinder{
        return element.all(by.css("mat-checkbox.mat-checkbox-checked.mat-checkbox-disabled")).get(1);
    }
    getSelectedcount():ElementFinder{
        //return element.all(by.css("span")).get(88);
        return element(by.css("div.settings-selectedcount")).element(by.tagName('span'));
    }
    getcalculatedcount():number{
        count = count+1;
        return count;
    }
    getunselectedcount():number{
        uncount = uncount-1;
        return uncount;
    }
    
}