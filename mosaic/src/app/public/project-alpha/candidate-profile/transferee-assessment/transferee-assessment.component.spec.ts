import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfereeAssessmentComponent } from './transferee-assessment.component';

describe('TransfereeAssessmentComponent', () => {
  let component: TransfereeAssessmentComponent;
  let fixture: ComponentFixture<TransfereeAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfereeAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfereeAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
