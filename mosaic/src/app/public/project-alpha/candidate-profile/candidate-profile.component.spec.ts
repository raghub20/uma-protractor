import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfileComponent } from './candidate-profile.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('CandidateProfileComponent', () => {
  let component: CandidateProfileComponent;
  let fixture: ComponentFixture<CandidateProfileComponent>;
  let button: HTMLElement;
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
  it('should have button named view_column', () => {
    const Column = fixture.debugElement.query(By.css('.viewsetting-icon'));
    expect(Column).toBeTruthy();
  });
  it('should open dialog on click of view_column icon', async(() => {
      spyOn(component, 'openModal');
      const data = fixture.debugElement.queryAll(By.css('mat-icon'));
      button = data[1].nativeElement;
      button.click();
      fixture.whenStable().then(() => {
        expect(component.openModal).toHaveBeenCalled();
      });
   }));

});
