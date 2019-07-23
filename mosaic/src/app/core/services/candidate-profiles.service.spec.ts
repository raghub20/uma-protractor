import { async, TestBed, inject } from '@angular/core/testing';

import { CandidateProfilesService } from './candidate-profiles.service';
import { LevelService } from './level.service';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CandidateProfilesService', () => {
  let service: CandidateProfilesService;
  let levelList: LevelService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      imports: [
        MaterialModule
      ]
    })
      .compileComponents();
  }));
  
  beforeEach(() => {
    service = new CandidateProfilesService();
    levelList = new LevelService();
  });
  it('should be created', () => {
// tslint:disable-next-line: no-shadowed-variable
    const service: CandidateProfilesService = TestBed.get(CandidateProfilesService);
    expect(service).toBeTruthy();
  });
  it('should create getCandidateProfiles method', () => {
    expect(service.getCandidateProfiles).toBeTruthy();
  });
  it('should create addCandidateProfile method', () => {
    expect(service.addCandidateProfile).toBeTruthy();
  });
  it('should call addCandidateProfile method', () => {
       const data = {
        fullname: 'Matthew, Maturity',
        level: {
          levelId: 'level2',
          levelName: 'Level 2 (100,001 to 250,000 USD)',
          levelDescription: 'Level 2 - Salary details'
        },
        departure: 'NJ, Nutley',
        destination: 'TX, Austin',
        status: 'Invitation Not Sent',
        isAssessmentReceived: false,
        emailAddress: 'mathew.maturity@gmail.com',
        businessUnit: 'Human Resources',
        invitationSentDate: '21-JUN-19',
        createdDate: '21-JUN-19',
        createdBy: 'Matthew, Maturity',
        lastUpdatedDate: '21-JUN-19'
    };
    service.addCandidateProfile(data, levelList,false);
  });

  it('should call getCandidateProfiles  method', () => {
  console.log(service.getCandidateProfiles());
  });
});
