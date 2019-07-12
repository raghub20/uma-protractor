import { TestBed, inject } from '@angular/core/testing';

import { CandidateProfilesService } from './candidate-profiles.service';
import { LevelService } from './level.service';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CandidateProfilesService', () => {
  let service: CandidateProfilesService;
  let levelList: LevelService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ MaterialModule ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
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
      fullname: 'George, Wesley',
      level:
      { levelId: 'L1',
        levelName: 'Level 1 (salary $250,000+)',
        levelDescription: 'Level 1 - Salary Range'
      },
      departure: 'NJ, Nutley',
      destination: 'TX, Austin',
      status: 'invitation sent',
      isInvitationSent: true,
      invitationText: 'Success',
      isAssessmentReceived: true,
      email: 'georgewesley@gmail.com',
      businessUnit: 'HR'
    };
    service.addCandidateProfile(data, levelList);
  });

  it('should call getCandidateProfiles  method', () => {
  console.log(service.getCandidateProfiles());
  });
});
