import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailsComponent } from './candidate-details.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HighlightSearchPipe } from '../../highlight-search.pipe';

describe('CandidateDetailsComponent', () => {
  let component: CandidateDetailsComponent;
  let fixture: ComponentFixture<CandidateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ CandidateDetailsComponent, HighlightSearchPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*

  it('should create', () => {
    expect(component).toBeTruthy();
  });
*/

});
