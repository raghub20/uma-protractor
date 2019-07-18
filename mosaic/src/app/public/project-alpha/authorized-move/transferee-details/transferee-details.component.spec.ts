import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfereeDetailsComponent } from './transferee-details.component';

describe('TransfereeDetailsComponent', () => {
  let component: TransfereeDetailsComponent;
  let fixture: ComponentFixture<TransfereeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfereeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfereeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*

  // Uncomment the test case when adding other unit tests. 

  /*

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  */
});
