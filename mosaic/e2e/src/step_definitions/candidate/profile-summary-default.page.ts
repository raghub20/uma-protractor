import { browser, promise, element, by, ElementFinder, ElementArrayFinder, WebElementPromise } from 'protractor';

export class Defaultcolumn {

get(): promise.Promise<any> {
    return browser.get('/#/project-alpha/candidate-profiles');
}

getUser(): promise.Promise<any> {
    return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
}
getcandidates():ElementFinder{
    return element(by.css("section.content_table"));
}
getfirstlastname():ElementArrayFinder{
     return element.all(by.css("span.text-as-link"));
}
getdeparturevalue():ElementArrayFinder{
    return element.all(by.css("td.cdk-column-departure"));
}
getdestinationvalue():ElementArrayFinder{
    return element.all(by.css("td.cdk-column-destination"));
}
getlevelvalue():ElementArrayFinder{
    return element.all(by.css("td.cdk-column-level"));
}
getstatusvalue():ElementArrayFinder{
    return element.all(by.css("td.cdk-column-status"));
}
getstatusHyperlink(parent:ElementFinder):ElementFinder{
    return parent.element(by.tagName("a"));
    //return element.all(by.css("td.cdk-column-status"));
}
getsortfullname():ElementFinder{
    return element.all(by.css("div.mat-sort-header-indicator")).get(0);
}
getsortlevel():ElementFinder{
    return element.all(by.css("div.mat-sort-header-indicator")).get(1);
}
getsortdeparture():ElementFinder{
    return element.all(by.css("div.mat-sort-header-indicator")).get(2);
}
getsortdestination():ElementFinder{
    return element.all(by.css("div.mat-sort-header-indicator")).get(3);
}
getsortstatus():ElementFinder{
    return element.all(by.css("div.mat-sort-header-indicator")).get(4);
}
getselectfirstrecord():ElementFinder{
    return element.all(by.css("div.mat-checkbox-inner-container")).get(1);
}
getselectedfirstrecord():ElementFinder{
    return element(by.xpath("(//input[@class='mat-checkbox-input cdk-visually-hidden'])[2]"));
}
getclickfirstrecord():ElementFinder{
    return element.all(by.css("td.cdk-column-fullname")).get(1);
}
getaddcandidateform():ElementFinder{
    return element(by.css("div.addcandidateformcontainer"));
}

getsortascending(arr: Array<String>): Boolean{
var sorted: boolean = true;
var sortedArr = arr.slice();
sortedArr.sort();
for(var i = 0; i < arr.length; i++)
{
    if(arr[i] != sortedArr[i])
    {
        sorted = false;
        break;
    }
}
    return sorted;
}

getsortdescending(arr): Boolean{
    var sorted: boolean = true;
var sortedArr = arr.slice();
sortedArr.sort();
sortedArr.reverse();
for(var i = 0; i < arr.length; i++)
{
    if(arr[i] != sortedArr[i])
    {
        sorted = false;
        break;
    }
}
    return sorted;
}
}