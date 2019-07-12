import { Injectable } from '@angular/core';
import { ApprovedMove } from '../models/approved-move';

@Injectable({
  providedIn: 'root'
})
export class ApprovedMovesService {

   // SAMPLE JSON data - will be replaced once we have httpclient implemented
  // Method is implemented below to return the data
  approveMovesList: ApprovedMove[] = [
    {
      'moveId': '21312',
      'candidate': {
      'fullname': 'Matthew, Maturity',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'mathew.maturity@gmail.com',
      'businessUnit': 'Human Resources',
      'invitationSentDate': '21-JUN-19',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19'
    },
    'authorizedAmount': '75,000 USD',
    'spentAmount': '45,000 USD',
    'departure': 'NY, New York',
    'destination': 'NJ, Jersey City',
    'status': 'Authorized',
    'lastUpdateDate': '05/20/2019',
    'paymentReceived': 'YES',
    'authorizedBy': 'Tom Jefferson',
    'authorizedDate': '05/15/2019',
    'authorizedClientName': 'Starbucks',
    'createdBy': 'alpha_admin',
    'createdDate': '05/06/2019'
  },
  {
    'moveId': '21312',
    'candidate': {
    'fullname': 'Matthew, Maturity',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 2 (100,001 to 250,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure': 'NJ, Nutley',
    'destination': 'TX, Austin',
    'status': 'Invitation Not Sent',
    'isAssessmentReceived': false,
    'emailAddress': 'mathew.maturity@gmail.com',
    'businessUnit': 'Human Resources',
    'invitationSentDate': '21-JUN-19',
    'createdDate': '21-JUN-19',
    'createdBy': 'Matthew, Maturity',
    'lastUpdatedDate': '21-JUN-19'
  },
  'authorizedAmount': '75,000 USD',
  'spentAmount': '45,000 USD',
  'departure': 'NY, New York',
  'destination': 'NJ, Jersey City',
  'status': 'Authorized',
  'lastUpdateDate': '05/20/2019',
  'paymentReceived': 'YES',
  'authorizedBy': 'Tom Jefferson',
  'authorizedDate': '05/15/2019',
  'authorizedClientName': 'Starbucks',
  'createdBy': 'alpha_admin',
  'createdDate': '05/06/2019'
},
{
  'moveId': '21312',
  'candidate': {
  'fullname': 'Matthew, Maturity',
  'level': {
    'levelId': 'level2',
    'levelName': 'Level 2 (100,001 to 250,000 USD)',
    'levelDescription': 'Level 2 - Salary details'
  },
  'departure': 'NJ, Nutley',
  'destination': 'TX, Austin',
  'status': 'Invitation Not Sent',
  'isAssessmentReceived': false,
  'emailAddress': 'mathew.maturity@gmail.com',
  'businessUnit': 'Human Resources',
  'invitationSentDate': '21-JUN-19',
  'createdDate': '21-JUN-19',
  'createdBy': 'Matthew, Maturity',
  'lastUpdatedDate': '21-JUN-19'
},
'authorizedAmount': '75,000 USD',
'spentAmount': '45,000 USD',
'departure': 'NY, New York',
'destination': 'NJ, Jersey City',
'status': 'Authorized',
'lastUpdateDate': '05/20/2019',
'paymentReceived': 'YES',
'authorizedBy': 'Tom Jefferson',
'authorizedDate': '05/15/2019',
'authorizedClientName': 'Starbucks',
'createdBy': 'alpha_admin',
'createdDate': '05/06/2019'
},
{
  'moveId': '21312',
  'candidate': {
  'fullname': 'Matthew, Maturity',
  'level': {
    'levelId': 'level2',
    'levelName': 'Level 2 (100,001 to 250,000 USD)',
    'levelDescription': 'Level 2 - Salary details'
  },
  'departure': 'NJ, Nutley',
  'destination': 'TX, Austin',
  'status': 'Invitation Not Sent',
  'isAssessmentReceived': false,
  'emailAddress': 'mathew.maturity@gmail.com',
  'businessUnit': 'Human Resources',
  'invitationSentDate': '21-JUN-19',
  'createdDate': '21-JUN-19',
  'createdBy': 'Matthew, Maturity',
  'lastUpdatedDate': '21-JUN-19'
},
'authorizedAmount': '75,000 USD',
'spentAmount': '45,000 USD',
'departure': 'NY, New York',
'destination': 'NJ, Jersey City',
'status': 'Authorized',
'lastUpdateDate': '05/20/2019',
'paymentReceived': 'YES',
'authorizedBy': 'Tom Jefferson',
'authorizedDate': '05/15/2019',
'authorizedClientName': 'Starbucks',
'createdBy': 'alpha_admin',
'createdDate': '05/06/2019'
},
{
  'moveId': '21312',
  'candidate': {
  'fullname': 'Matthew, Maturity',
  'level': {
    'levelId': 'level2',
    'levelName': 'Level 2 (100,001 to 250,000 USD)',
    'levelDescription': 'Level 2 - Salary details'
  },
  'departure': 'NJ, Nutley',
  'destination': 'TX, Austin',
  'status': 'Invitation Not Sent',
  'isAssessmentReceived': false,
  'emailAddress': 'mathew.maturity@gmail.com',
  'businessUnit': 'Human Resources',
  'invitationSentDate': '21-JUN-19',
  'createdDate': '21-JUN-19',
  'createdBy': 'Matthew, Maturity',
  'lastUpdatedDate': '21-JUN-19'
},
'authorizedAmount': '75,000 USD',
'spentAmount': '45,000 USD',
'departure': 'NY, New York',
'destination': 'NJ, Jersey City',
'status': 'Authorized',
'lastUpdateDate': '05/20/2019',
'paymentReceived': 'YES',
'authorizedBy': 'Tom Jefferson',
'authorizedDate': '05/15/2019',
'authorizedClientName': 'Starbucks',
'createdBy': 'alpha_admin',
'createdDate': '05/06/2019'
},
{
  'moveId': '21312',
  'candidate': {
  'fullname': 'Matthew, Maturity',
  'level': {
    'levelId': 'level2',
    'levelName': 'Level 2 (100,001 to 250,000 USD)',
    'levelDescription': 'Level 2 - Salary details'
  },
  'departure': 'NJ, Nutley',
  'destination': 'TX, Austin',
  'status': 'Invitation Not Sent',
  'isAssessmentReceived': false,
  'emailAddress': 'mathew.maturity@gmail.com',
  'businessUnit': 'Human Resources',
  'invitationSentDate': '21-JUN-19',
  'createdDate': '21-JUN-19',
  'createdBy': 'Matthew, Maturity',
  'lastUpdatedDate': '21-JUN-19'
},
'authorizedAmount': '75,000 USD',
'spentAmount': '45,000 USD',
'departure': 'NY, New York',
'destination': 'NJ, Jersey City',
'status': 'Authorized',
'lastUpdateDate': '05/20/2019',
'paymentReceived': 'YES',
'authorizedBy': 'Tom Jefferson',
'authorizedDate': '05/15/2019',
'authorizedClientName': 'Starbucks',
'createdBy': 'alpha_admin',
'createdDate': '05/06/2019'
},
{
  'moveId': '21312',
  'candidate': {
  'fullname': 'Matthew, Maturity',
  'level': {
    'levelId': 'level2',
    'levelName': 'Level 2 (100,001 to 250,000 USD)',
    'levelDescription': 'Level 2 - Salary details'
  },
  'departure': 'NJ, Nutley',
  'destination': 'TX, Austin',
  'status': 'Invitation Not Sent',
  'isAssessmentReceived': false,
  'emailAddress': 'mathew.maturity@gmail.com',
  'businessUnit': 'Human Resources',
  'invitationSentDate': '21-JUN-19',
  'createdDate': '21-JUN-19',
  'createdBy': 'Matthew, Maturity',
  'lastUpdatedDate': '21-JUN-19'
},
'authorizedAmount': '75,000 USD',
'spentAmount': '45,000 USD',
'departure': 'NY, New York',
'destination': 'NJ, Jersey City',
'status': 'Authorized',
'lastUpdateDate': '05/20/2019',
'paymentReceived': 'YES',
'authorizedBy': 'Tom Jefferson',
'authorizedDate': '05/15/2019',
'authorizedClientName': 'Starbucks',
'createdBy': 'alpha_admin',
'createdDate': '05/06/2019'
}

];

  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getApprovedMoves(): ApprovedMove[] {
    //console.log(this.approveMovesList);
    return this.approveMovesList;
  }

}
