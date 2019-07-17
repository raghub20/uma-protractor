import { Candidate} from './candidate';
import { HrLink } from './hr-link';
import { Level } from './level';

export interface CostModel {
    costModelId: string;
    modelName: string;
    level: Level;
    departure: string;
    destination: string;
    hrLinks: HrLink[];
    updateDate: string;
    createdBy: string;
    createdDate: string;
}
