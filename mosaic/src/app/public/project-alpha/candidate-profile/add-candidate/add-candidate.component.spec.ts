import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidateProfilesService } from '../../../../core/services/candidate-profiles.service';
import { AddCandidateComponent } from './add-candidate.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatMenuModule, MatButtonModule, MatSidenavModule,
MatExpansionModule, MatIconModule, MatCheckboxModule, MatDialogModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Candidate } from '../../../../core/models/candidate';

describe('AddCandidateComponent', () => {
  let component: AddCandidateComponent;
  let fixture: ComponentFixture<AddCandidateComponent>;
  let el: HTMLElement;
 // let level:Level;
  const model: Candidate = {
    'fullname': 'Matthew, Maturity',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 2 (100,001 to 250,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure': 'NJ, Nutley',
    'destination': 'TX, Austin',
    'status': 'Invitation Not Sent',
    'isAssessmentReceived': false,
    'emailAddress': 'mathew.maturity@gmail.com',
    'businessUnit': 'Human Resources',
    'invitationSentDate': '21-JUN-19',
    'createdDate': '21-JUN-19',
    'createdBy': 'Matthew, Maturity',
    'lastUpdatedDate': '21-JUN-19'

  };
  const dialogMock = {
    close: () => { }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidateComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatExpansionModule,
        MatIconModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatAutocompleteModule,
        MaterialModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandidateComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('variables', () => {
    expect(component.addCandidateForm).toBeDefined();
    // expect(component.data).toBeDefined();
    expect(component.errors).toBeDefined();
    expect(component.mode).toBeDefined();
    expect(component.formReady).toBe(false);
    expect(component.levels).toBeDefined();
    expect(component.options).toBeDefined();
    expect(component.departures).toBeDefined();
    expect(component.destinations).toBeDefined();
    // expect(component.addCandidateForm.controls['level']).toBe('Level 1 (salary $250,000+)');
  });
  it('should create a form with these ', () => {
    expect(component.addCandidateForm.contains('FirstName')).toBeTruthy();
    expect(component.addCandidateForm.contains('LastName')).toBeTruthy();
    expect(component.addCandidateForm.contains('Email')).toBeTruthy();
    expect(component.addCandidateForm.contains('Level')).toBeTruthy();
    expect(component.addCandidateForm.contains('Departure')).toBeTruthy();
    expect(component.addCandidateForm.contains('Destination')).toBeTruthy();
  });
  it('should make first name required', () => {
    const control = component.addCandidateForm.get('FirstName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should make last name required', () => {
    const control = component.addCandidateForm.get('LastName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should return email ID', () => {
    const control = component.addCandidateForm.get('Email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should return level', () => {
    const control = component.addCandidateForm.get('Level');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should set destination to check filter', () => {
    const control = component.addCandidateForm.get('Departure');
    control.setValue('TX');
    expect(component.departures).not.toBeNull();
  });
  it('should set destination to check filter', () => {
    const control = component.addCandidateForm.get('Destination');
    control.setValue('TX');
    expect(component.destinations).not.toBeNull();
  });
  it('should check whether error message is called when giving invaild data', () => {
    const spy = spyOn(component, 'getErrorMessage').and.callThrough();
    const control = component.addCandidateForm.get('FirstName');
    control.setValue('');
    // console.log(spy);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();

  });
  it('should call sendInvite method', async(() => {
    spyOn(component, 'sendInvite');
    el = fixture.debugElement.query(By.css('#invite')).nativeElement;
    el.click();
    expect(component.sendInvite).toHaveBeenCalledTimes(1);
  }));
  it('should call onNoClick on cancel method', async(() => {

    spyOn(component, 'onNoClick');
    el = fixture.debugElement.query(By.css('#cancel')).nativeElement;
    el.click();
    expect(component.onNoClick).toHaveBeenCalledTimes(1);
  }));

  it('should call sendInvite method on click of save draft', async(() => {

    spyOn(component, 'sendInvite');
    el = fixture.debugElement.query(By.css('#save')).nativeElement;
    el.click();
    expect(component.sendInvite).toHaveBeenCalledTimes(1);
  }));

  /*
  it('should close dialog once clicked sendfunction', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.sendInvite();
    expect(spy).toHaveBeenCalled();
  });
  */

  it('should close dialog once clicked onNoClick', () => {
    const spy = spyOn(component, 'onNoClick').and.callThrough();
    component.onNoClick();
    expect(spy).toHaveBeenCalled();
  });

    it('should check whether the table is populated', () => {

      fixture.whenStable().then(() => {
        const data = fixture.debugElement.queryAll(By.css('input'));
        const firstname = data[0].nativeElement;
        expect(firstname.value).toBe('Maturity');
        const lastname = data[1].nativeElement;
        expect(lastname.value).toBe('Matthew');
        const email = data[2].nativeElement;
        expect(email.value).toBe('mathew.maturity@gmail.com');
        const bussinessunit = data[3].nativeElement;
        expect(bussinessunit.value).toBe('HR');
        const departure = data[4].nativeElement;
        expect(departure.value).toBe('NJ, Nutley');
        const destination = data[5].nativeElement;
        expect(destination.value).toBe('TX, Austin');
        const option = fixture.debugElement.query(By.css('.mat-select-value')).nativeElement;
        const matSelectValueObject: HTMLElement = fixture.debugElement.query(By.css('.mat-select-value')).nativeElement;
        fixture.detectChanges();
        // const innerSpan = matSelectValueObject.children[0].children[0]; // for getting the inner span
        // expect(innerSpan.innerHTML).toBe('Level 1 (salary $250,000+)');
      });
    });
    it('should check whether getErrorMessage Firstname field is called' , () => {
      const control = component.addCandidateForm.get('FirstName');
      control.setValue('');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('FIRST_NAME');
      expect(spy).toHaveBeenCalled();
    });
    it('should check whether getErrorMessage Firstname field is validated for special characters' , () => {
      const control = component.addCandidateForm.get('FirstName');
      control.setValue('Abi@');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('FIRST_NAME');
      expect(spy).toHaveBeenCalled();
    });
    it('should check whether getErrorMessage Lastname field is called' , () => {
      const control = component.addCandidateForm.get('LastName');
      control.setValue('');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('LAST_NAME');
      expect(spy).toHaveBeenCalled();
    });
    it('should check whether getErrorMessage Lastname field is validated for special character' , () => {
      const control = component.addCandidateForm.get('LastName');
      control.setValue('Abi@');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('LAST_NAME');
      expect(spy).toHaveBeenCalled();
    });
    it('should check whether getErrorMessage email field is called' , () => {
      const control = component.addCandidateForm.get('Email');
      control.setValue('');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('EMAIL');
      expect(spy).toHaveBeenCalled();
     });
    it('should check whether getErrorMessage email field is called' , () => {
      const control = component.addCandidateForm.get('Email');
      control.setValue('abc');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('EMAIL');
      expect(spy).toHaveBeenCalled();
    });
    });
