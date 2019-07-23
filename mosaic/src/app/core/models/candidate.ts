import { Level } from './level';

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
}