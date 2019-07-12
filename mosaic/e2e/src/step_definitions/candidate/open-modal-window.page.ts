import { browser, element, by, promise, ElementFinder } from 'protractor';

export class OpenModalPage {
    get() {
        return browser.get('/#/project-alpha/candidate-profiles');
    }

    getUser() {
        return new promise.Promise((resolve) => resolve('user')); // TODO: Find and return real user
    }
    getCandidatesScreenE1(): ElementFinder{
        return element(by.xpath("//h2[contains(text(),'Candidate Details')]"));
    }
    getinvitationsentresendE1(): ElementFinder{
        return element(by.xpath("(//a[contains(text(),' Resend ')])[1]"));
    }
    getmodalwindowforresendE1(): ElementFinder{
        return element(by.xpath("//h2[contains(text(),'Resend Invitation')]"));
    }
    getreadyforreviewE1(): ElementFinder{
        return element(by.xpath("(//a[contains(text(),' Ready for Review ')])[1]"));
    }
    getmodalwindowforreadyforreview(): ElementFinder{
        return element(by.xpath("//h2[contains(text(),'Add/Edit Candidate')]"));
    }
    getassessmentinprogressE1(): ElementFinder{
        return element(by.xpath("(//span[contains(text(),' Assessment In Progress ')])[1]"));
    }
    getInvitationnotsentE1(): ElementFinder{
        return element(by.xpath("(//span[contains(text(),' Invitation Not Sent ')])[1]"));
    }
    getPendingVanLineE1(): ElementFinder{
        return element(by.xpath("(//span[contains(text(),' Pending Van Line Quote ')])[1]"));
         
    }
}