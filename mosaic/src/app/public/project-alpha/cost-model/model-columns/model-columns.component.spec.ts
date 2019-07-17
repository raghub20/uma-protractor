import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelColumnsComponent } from './model-columns.component';

describe('ModelColumnsComponent', () => {
  let component: ModelColumnsComponent;
  let fixture: ComponentFixture<ModelColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  /*

  /* Please uncomment this test case when refactoring/adding other unit tests

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */

});
