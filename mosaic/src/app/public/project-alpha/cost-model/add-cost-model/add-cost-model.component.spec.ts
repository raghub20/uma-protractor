import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostModelComponent } from './add-cost-model.component';

describe('AddCostModelComponent', () => {
  let component: AddCostModelComponent;
  let fixture: ComponentFixture<AddCostModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCostModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostModelComponent);
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
