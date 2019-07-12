import { Candidate} from './candidate';
import { HrLink } from './hr-link';


export interface CostModel {
    costModelId: string;
    modelName: string;
    departure: string;
    destination: string;
    hrLinks: HrLink[];
    updateDate: string;
    createdBy: string;
    createdDate: string;
}
