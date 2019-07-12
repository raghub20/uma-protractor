import { Candidate} from './candidate';
import { Level} from './level';

export interface ApprovedMove {
    moveId: string;
    candidate: Candidate;
    authorizedAmount: string;
    spentAmount: string;
    departure: string;
    destination: string;
    status: string;
    lastUpdateDate: string;
    paymentReceived: string;
    authorizedBy: string;
    authorizedDate: string;
    authorizedClientName: string;
    createdBy: string;
    createdDate: string;
}
