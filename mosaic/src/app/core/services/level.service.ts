import { Injectable } from '@angular/core';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  levelList: Level[] = [
    { levelId: 'L1', levelName: 'Level 1 (250,000+ USD)', levelDescription: 'Level 1 - Salary Range' },
    { levelId: 'L2', levelName: 'Level 2 (100,001 to 250,000 USD)', levelDescription: 'Level 2 - Salary Range' },
    { levelId: 'L3', levelName: 'Level 3 (0 to 100,000 USD)', levelDescription: 'Level 3 - Salary Range' }
];

  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getLevels(): Level[] {
    return this.levelList;
  }
  /* Return the level Id*/
  getLevelId(levelName) {
    for (let i = 0; i < this.levelList.length; i++){
      // look for the entry with a matching `code` value
      if (this.levelList[i].levelName === levelName){
         return this.levelList[i];
      }
    }
  }

}
