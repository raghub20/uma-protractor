import { Injectable } from '@angular/core';
import { CostModel} from '../models/cost-model';

@Injectable({
  providedIn: 'root'
})
export class CostModelsService {

  costModelList: CostModel[] = [{
    'costModelId': '7867877',
    'modelName': 'Mid-Level Manager',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 2 (100,001 to 250,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure':'NJ, Nutley',
    'destination':'TX, Austin',
    'hrLinks': [{
      'linkId': '9099',
    'Hr_link_url': 'https://www.mycigna.com/abcompany',
    'link_type': 'Healthcare',
    }],
    'updateDate': '2019/05/27',
    'createdBy': 'Admin',
    'createdDate': '2019/05/20'
  },
  {
    'costModelId': '45434',
    'modelName': 'Group Move to LA',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 1 (250,000+ USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure':'NJ, Nutley',
    'destination':'CA, Los Angeles',
    'hrLinks': [{
      'linkId': '2356',
    'Hr_link_url': 'https://www.americanfunds.com/individual/products/401k.html?gclid=Cj0KCQjw9pDpBRCkARIsAOzRzivDBTefgPTgDMd6YaguZJ0Dwg7JTr81JUlEhbrWphh-dmnSkcNH1YcaAkbJEALw_wcB&gclsrc=aw.ds',
    'link_type': '401K Plan',
    }],
    'updateDate': '2019/06/22',
    'createdBy': 'Chris Watson',
    'createdDate': '2019/06/02'
  },
  {
    'costModelId': '66564',
    'modelName': 'L1 Dev Dallas Move',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 3 (0 to 100,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure':'UT, Ogden',
    'destination':'TX, Dallas',
    'hrLinks': [{
      'linkId': '2356',
    'Hr_link_url': 'https://www.americanfunds.com/individual/products/401k.html?gclid=Cj0KCQjw9pDpBRCkARIsAOzRzivDBTefgPTgDMd6YaguZJ0Dwg7JTr81JUlEhbrWphh-dmnSkcNH1YcaAkbJEALw_wcB&gclsrc=aw.ds',
    'link_type': '401K Plan',
    }],
    'updateDate': '2019/04/09',
    'createdBy': 'Ella Mason',
    'createdDate': '2019/03/25'
  }
];

  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getCostModels(): CostModel[] {
    return this.costModelList;
  }

  addCostModel(formData, levelDetails){

    const newCostModelObj = {
      'costModelId': '66564',
        'modelName': formData.ModelName,
        'level': {
          'levelId': levelDetails.levelId,
          'levelName': levelDetails.levelName,
          'levelDescription': levelDetails.levelDescription
        },
        'departure': formData.Departure,
        'destination': formData.Destination,
        'hrLinks': [{
          'linkId': '2356',
        'Hr_link_url': 'https://www.americanfunds.com/individual/products/401k.html?gclid=Cj0KCQjw9pDpBRCkARIsAOzRzivDBTefgPTgDMd6YaguZJ0Dwg7JTr81JUlEhbrWphh-dmnSkcNH1YcaAkbJEALw_wcB&gclsrc=aw.ds',
        'link_type': '401K Plan',
        }],
        'createdDate': '21-JUN-19',
        'createdBy': 'Matthew, Maturity',
        'updateDate': '21-JUN-19'
    };

    this.costModelList.push(newCostModelObj);
  }

}
