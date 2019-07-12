import { Injectable } from '@angular/core';
import { CostModel} from '../models/cost-model';

@Injectable({
  providedIn: 'root'
})
export class CostModelsService {

  costModelList: CostModel[] = [{
    'costModelId': '7867877',
    'modelName': 'Mid-Level Manager',
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
}
