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
      'lastUpdatedDate': '21-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
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
      'fullname': 'Christopher, Beal',
      'level': {
        'levelId': 'level1',
        'levelName': 'Level 1 (250,000+ USD)',
        'levelDescription': 'Level 1 - Salary details'
      },
      'departure': 'GA, Atlanta',
      'destination': 'TX, Dallas',
      'status': 'Ready for Review',
      'isAssessmentReceived': true,
      'emailAddress': 'chris.beal@gmail.com',
      'businessUnit': 'Finance',
      'invitationSentDate': '9-APR-19',
      'createdDate': '9-APR-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '2-MAY-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    },
  'authorizedAmount': '90,000 USD',
  'spentAmount': '60,000 USD',
  'departure': 'NJ, Jersey City',
  'destination': 'CA, San Francisco',
  'status': 'Move in Progress',
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
    'fullname': 'Dan, Goulet',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 2 (100,001 to 250,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure': 'NJ, Jersey City',
    'destination': 'CA, San Francisco',
    'status': 'Invitation Not Sent',
    'isAssessmentReceived': false,
    'emailAddress': 'dan.goulet@gmail.com',
    'businessUnit': 'Engineering',
    'invitationSentDate': '12-JAN-19',
    'createdDate': '8-JAN-19',
    'createdBy': 'Matthew, Maturity',
    'lastUpdatedDate': '25-JAN-19',
    'streetAddress': '41 Apple Ridge Rd',
    'city': 'Danbury',
    'state': 'CT',
    'zipcode': '06810',
    'noOfRooms': '4',
    'housingType': 'Rents Apartment',
    'noOfChildren': '3',
    'total': '5'
  },
'authorizedAmount': '50,000 USD',
'spentAmount': '25,000 USD',
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
    'fullname': 'James, Cordon',
    'level': {
      'levelId': 'level3',
      'levelName': 'Level 3 (0 to 100,000 USD)',
      'levelDescription': 'Level 3 - Salary details'
    },
    'departure': 'PA, Philadelphia',
    'destination': 'TX, Austin',
    'status': 'Invitation Not Sent',
    'isAssessmentReceived': false,
    'emailAddress': 'j.cordon@gmail.com',
    'businessUnit': 'Engineering',
    'invitationSentDate': '28-JAN-19',
    'createdDate': '23-JAN-19',
    'createdBy': 'Matthew, Maturity',
    'lastUpdatedDate': '30-JAN-19',
    'streetAddress': '41 Apple Ridge Rd',
    'city': 'Danbury',
    'state': 'CT',
    'zipcode': '06810',
    'noOfRooms': '4',
    'housingType': 'Rents Apartment',
    'noOfChildren': '3',
    'total': '5'
  },
'authorizedAmount': '20,000 USD',
'spentAmount': '10,000 USD',
'departure': 'NJ, Nutley',
'destination': 'TX, Austin',
'status': 'HHG Booked',
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
    'fullname': 'Francesca, Hayes',
    'level': {
      'levelId': 'level1',
      'levelName': 'Level 1 (250,000+ USD)',
      'levelDescription': 'Level 1 - Salary details'
    },
    'departure': 'NJ, Nutley',
    'destination': 'TX, Austin',
    'status': 'Invitation Not Sent',
    'isAssessmentReceived': false,
    'emailAddress': 'francesca.hayes@gmail.com',
    'businessUnit': 'Accounting',
    'invitationSentDate': '22-FEB-19',
    'createdDate': '2-FEB-19',
    'createdBy': 'Matthew, Maturity',
    'lastUpdatedDate': '23-MAR-19',
    'streetAddress': '8 pacific Ave',
    'city': 'Boston',
    'state': 'MA',
    'zipcode': '01234',
    'noOfRooms': '6',
    'housingType': 'Rents Apartment',
    'noOfChildren': '4',
    'total': '6'
  },
'authorizedAmount': '95,000 USD',
'spentAmount': '75,000 USD',
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
    'fullname': 'Adam, Hu',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 2 (100,001 to 250,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure': 'NJ, Nutley',
    'destination': 'TX, Austin',
    'status': 'Invitation Not Sent',
    'isAssessmentReceived': false,
    'emailAddress': 'adam.hu@gmail.com',
    'businessUnit': 'Marketing',
    'invitationSentDate': '21-JUN-19',
    'createdDate': '21-JUN-19',
    'createdBy': 'Matthew, Maturity',
    'lastUpdatedDate': '21-JUN-19',
    'streetAddress': '41 Apple Ridge Rd',
    'city': 'Danbury',
    'state': 'CT',
    'zipcode': '06810',
    'noOfRooms': '4',
    'housingType': 'Rents Apartment',
    'noOfChildren': '3',
    'total': '5'
  },
'authorizedAmount': '50,000 USD',
'spentAmount': '18,000 USD',
'departure': 'NY, New York',
'destination': 'NJ, Jersey City',
'status': 'Move in Progress',
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
    'fullname': 'Suehong, Jones',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 2 (100,001 to 250,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure': 'NJ, Nutley',
    'destination': 'TX, Austin',
    'status': 'Invitation Not Sent',
    'isAssessmentReceived': false,
    'emailAddress': 'suehong.jones@gmail.com',
    'businessUnit': 'Human Resources',
    'invitationSentDate': '2-JUN-19',
    'createdDate': '2-JUN-19',
    'createdBy': 'Matthew, Maturity',
    'lastUpdatedDate': '20-JUN-19',
    'streetAddress': '41 Apple Ridge Rd',
    'city': 'Danbury',
    'state': 'CT',
    'zipcode': '06810',
    'noOfRooms': '4',
    'housingType': 'Rents Apartment',
    'noOfChildren': '3',
    'total': '5'
  },
'authorizedAmount': '30,000 USD',
'spentAmount': '12,000 USD',
'departure': 'NJ, Nutley',
'destination': 'TX, Austin',
'status': 'HHG Booked',
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
    // console.log(this.approveMovesList);
    return this.approveMovesList;
  }
}
