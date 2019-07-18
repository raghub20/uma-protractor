import { Level } from './level';
import { CoreBenefitsService } from './core-benefits.model';
import { FlexibleSpendService } from './flexible-spend.model';
import { TotalRecommendBudget } from './total-recommend-budget.model';
export interface Candidate {
    fullname: string;
    level: Level;
    departure: string;
    destination: string;
    status: string;
    isAssessmentReceived: boolean;
    emailAddress: string;
    businessUnit: string;
    invitationSentDate: string;
    createdDate: string;
    createdBy: string;
    lastUpdatedDate: string;
    // service: CoreBenefitsService[];
    // TotalBudget: Number;
    // TaxAmt: Number;
    // TotalCost: Number;
    // Currency: String;
}
