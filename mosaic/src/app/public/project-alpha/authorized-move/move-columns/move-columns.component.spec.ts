import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveColumnsComponent } from './move-columns.component';

describe('MoveColumnsComponent', () => {
  let component: MoveColumnsComponent;
  let fixture: ComponentFixture<MoveColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
