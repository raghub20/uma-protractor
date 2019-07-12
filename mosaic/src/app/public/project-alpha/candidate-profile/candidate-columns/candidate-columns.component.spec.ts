import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateColumnsComponent } from './candidate-columns.component';

describe('CandidateColumnsComponent', () => {
  let component: CandidateColumnsComponent;
  let fixture: ComponentFixture<CandidateColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
