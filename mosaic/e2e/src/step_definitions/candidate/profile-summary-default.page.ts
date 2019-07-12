import { browser, promise, element, by, ElementFinder, ElementArrayFinder } from 'protractor';

export class Defaultcolumn {

get(): promise.Promise<any> {
    return browser.get('/#/project-alpha/candidate-profiles');
}

getUser(): promise.Promise<any> {
    return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
}
getcandidates():ElementFinder{
    return element(by.css("section.candidate_details"));
}
getfirstlastname():ElementArrayFinder{
    return element.all(by.css("strong.highlight-search"))
}
}