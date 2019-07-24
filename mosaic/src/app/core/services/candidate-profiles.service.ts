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
      'fullname': 'Maturity, Matthew',
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
      'invitationSentDate': '',
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
    {
      'fullname': 'Beal, Christopher',
      'level': {
        'levelId': 'level1',
        'levelName': 'Level 1 (250,000+ USD)',
        'levelDescription': 'Level 1 - Salary details'
      },
      'departure': 'GA, Atlanta',
      'destination': 'TX, Dallas',
      'status': 'Pending Vanline Quote',
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
    {
      'fullname': 'Goulet, Dan',
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
    {
      'fullname': 'Cordon, James',
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
    {
      'fullname': 'Hayes, Francesca',
      'level': {
        'levelId': 'level1',
        'levelName': 'Level 1 (250,000+ USD)',
        'levelDescription': 'Level 1 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Pending Vanline Quote',
      'isAssessmentReceived': true,
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
    {
      'fullname': 'Hu, Adam',
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
    {
      'fullname': 'Jones, Suehong',
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
    {
      'fullname': 'Rector, Aleksandr',
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
    {
      'fullname': 'Richardson, Matthew',
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
    {
      'fullname': 'Varaha, Pritpal',
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
    {
      'fullname': 'Ellacott, Robin',
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
      'lastUpdatedDate': '21-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    }
];

  newCandidate: Candidate;
  constructor() { }

  /* Return the candidate json list and loop to display in the table */
  getCandidateProfiles(): Candidate[] {
    return this.candidateList;
  }

  /* Return the candidate json list and loop to display in the table */
  /*
  addCandidateProfile(formData, levelDetails, isInvitationSent){

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
  } */
  addCandidateProfile(formData, levelDetails, isInvitationSent) {
    const dateString = new Date().toISOString();
    console.log(this.candidateList.find(v => v.fullname === formData.LastName + ', ' + formData.FirstName));
    if (this.candidateList.find(v => v.fullname === formData.LastName + ', ' + formData.FirstName) === undefined) {
      console.log('New Candidate');
      const newCandidateObj = {
        'fullname': formData.LastName + ', ' + formData.FirstName,
        'level': {
          'levelId': levelDetails.levelId,
          'levelName': levelDetails.levelName,
          'levelDescription': levelDetails.levelDescription
        },
        'departure': formData.Departure,
        'destination': formData.Destination,
        'status': isInvitationSent ? 'Invitation Sent' : 'Invitation Not Sent' ,
        'isInvitationSent': isInvitationSent,
        'invitationText': 'Resend',
        'isAssessmentReceived': false,
        'email': formData.Email,
        'businessUnit': formData.BusinessUnit,
        'emailAddress': formData.Email,
        'invitationSentDate':  isInvitationSent ? dateString : '',
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
      };
      this.candidateList.push(newCandidateObj);
    } else {
      console.log('Update Candidate');
      console.log(formData.businessUnit);
      console.log(formData.Email);
      this.candidateList.filter(function(item) {
      return item.fullname === formData.LastName + ', ' + formData.FirstName;
      }).map(function(item) {
      item.fullname = formData.LastName + ', ' + formData.FirstName;
      item.level.levelId = levelDetails.levelId;
      item.level.levelName = levelDetails.levelName;
      item.level.levelDescription = levelDetails.levelDescription;
      item.departure = formData.Departure;
      item.destination = formData.Destination;
      item.status =  isInvitationSent ? 'Invitation Sent' : 'Invitation Not Sent';
      item.isAssessmentReceived = false;
      item.businessUnit = formData.BusinessUnit;
      item.invitationSentDate = isInvitationSent ? dateString : '';
      item.emailAddress = formData.Email;
      return item;
    });
    }
  }
}
