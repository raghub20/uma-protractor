import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfileComponent } from './candidate-profile.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('CandidateProfileComponent', () => {
  let component: CandidateProfileComponent;
  let fixture: ComponentFixture<CandidateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterTestingModule ],
      declarations: [ CandidateProfileComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
