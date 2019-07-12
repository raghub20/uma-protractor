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
      'fullname': 'Matthew, Maturity',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Ready for Review',
      'isAssessmentReceived': true,
      'emailAddress': 'mathew.maturity@gmail.com',
      'businessUnit': 'Human Resources',
      'invitationSentDate': '21-JUN-19',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19'
    },
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
