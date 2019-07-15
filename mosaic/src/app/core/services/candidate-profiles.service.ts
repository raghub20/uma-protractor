import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateProfilesService {

  // SAMPLE JSON data - will be replaced once we have httpclient implemented
  // Method is implemented below to return the data
  candidateList: Candidate[] = [
    {
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
    {
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
      'lastUpdatedDate': '2-MAY-19'
    },
    {
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
      'lastUpdatedDate': '25-JAN-19'
    },
    {
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
      'lastUpdatedDate': '30-JAN-19'
    },
    {
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
      'lastUpdatedDate': '23-MAR-19'
    },
    {
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
      'lastUpdatedDate': '21-JUN-19'
    },
    {
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
      'lastUpdatedDate': '20-JUN-19'
    },
    {
      'fullname': 'Aleksandr, Rector',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'aleksandr.rector@gmail.com',
      'businessUnit': 'Product Solutions',
      'invitationSentDate': '21-JUN-19',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19'
    },
    {
      'fullname': 'Matthew, Richardson',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'IL, Chicago',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'mathew.richardson@gmail.com',
      'businessUnit': 'Human Resources',
      'invitationSentDate': '21-JUN-19',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19'
    },
    {
      'fullname': 'Pritpal, Varaha',
      'level': {
        'levelId': 'level1',
        'levelName': 'Level 1 (250,000+ USD)',
        'levelDescription': 'Level 1 - Salary details'
      },
      'departure': 'NY, New York',
      'destination': 'GA, Atlanta',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'pritpal.varaha@gmail.com',
      'businessUnit': 'Finance',
      'invitationSentDate': '21-JUN-19',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19'
    },
    {
      'fullname': 'Robin, Ellacott',
      'level': {
        'levelId': 'level3',
        'levelName': 'Level 3 (0 to 100,000 USD)',
        'levelDescription': 'Level 3 - Salary details'
      },
      'departure': 'NJ, Morristown',
      'destination': 'CA, Los Angeles',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'robin.ellacott@gmail.com',
      'businessUnit': 'Engineering',
      'invitationSentDate': '21-JUN-19',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19'
    }
];

  newCandidate: Candidate;
  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getCandidateProfiles(): Candidate[] {
    return this.candidateList;
  }

  /* Return the candidate json list and loop to display in the table */
  addCandidateProfile(formData, levelDetails){

    const newCandidateObj = {
        'fullname': formData.LastName + ', ' + formData.FirstName,
        'level': {
          'levelId': levelDetails.levelId,
          'levelName': levelDetails.levelName,
          'levelDescription': levelDetails.levelDescription
        },
        'departure': formData.Departure,
        'destination': formData.Destination,
        'status': 'Invitation Sent',
        'isInvitationSent': true,
        'invitationText': 'Resend',
        'isAssessmentReceived': false,
        'email': formData.Email,
        'businessUnit': formData.businessUnit,
        'emailAddress': formData.Email,
        'invitationSentDate': '21-JUN-19',
        'createdDate': '21-JUN-19',
        'createdBy': 'Matthew, Maturity',
        'lastUpdatedDate': '21-JUN-19'
    };

    this.candidateList.push(newCandidateObj);
  }

}
