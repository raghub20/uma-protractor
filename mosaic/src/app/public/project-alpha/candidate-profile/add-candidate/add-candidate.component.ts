import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CandidateProfilesService } from '../../../../core/services/candidate-profiles.service';
import { LocationService } from '../../../../core/services/location.service';
import { LevelService } from '../../../../core/services/level.service';

import { Level } from '../../../../core/models/level';
import { Candidate } from '../../../../core/models/candidate';
import { Location } from '../../../../core/models/location';

import { Observable, empty } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 * Exporting the errormessages
 */
export const errorMessages: { [key: string]: string } = {
  Email: 'You must enter Email address',
  Destination: 'You must select destination',
  Level: 'You must select level'
};

/**
 * Add component for candidate
 */
@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-edit-component.html',
  styleUrls: ['./add-edit-candidate.scss']
})
export class AddCandidateComponent {

  /**Form group name */
  addCandidateForm: FormGroup;
  /* Title to display the dialog window page title */
  title: string;
  /**Flag mode for Create */
  mode = 'create';
  /**Assign formready Variable as False */
  formReady = false;
  /**Variables for error */
  errors = errorMessages;
  /**Binding the dropdown values to level filed */
  levels: Level[];

  /** auto complete values for destination */
  options: Location[];
  /** variable declared for depature */
  departures: Observable<Location[]>;
  /** variable declared for destinations */
  destinations: Observable<Location[]>;

  isSaveEnabled: Boolean = false;
  /**
   * Initializes form elements
   * @param formBuilder - property for form elements
   * @param dialogRef - property for mat dialog reference
   * @param data - contains popup data
   * @param candidateProfilesService - service parameter
   * @param changeDetectorRef - property for change detections
   */
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Candidate,
    private candidateProfilesService: CandidateProfilesService,
    private locationService : LocationService,
    private levelService : LevelService,
    private changeDetectorRef: ChangeDetectorRef) {

      /* Setting default title of the dialof window */
      this.title = 'Add Candidate';

      /* Get all the locations for destination and departure */
      this.options = this.locationService.getLocations();

      /* Get all the locations for destination and departure */
      this.levels = this.levelService.getLevels();

      /* Create the Add/Edit dialog window */
      this.addCandidateForm = this.formBuilder.group({
        FirstName: ['', Validators.compose([
            Validators.required, 
            Validators.pattern('^[a-zA-Z0-9]*$')]
          )],
        LastName: ['', Validators.compose([
            Validators.required, 
            Validators.minLength(1),
            Validators.maxLength(30), 
            Validators.pattern('^[a-zA-Z0-9]*$')]
          )],
        Email: ['', Validators.compose([
            Validators.required,
            Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
          )],
        Level: ['', Validators.required],
        Departure: [''],
        BusinessUnit: [''],
        Destination: ['', Validators.required]
      });

      /* If the data is present - it will open and pre-populate dialog window */
      if (this.data) {
        /* set page title to edit candidate */
        this.title = 'Edit Candidate';

        /* Setting the default values for form elements in edit candidate dialog */
        this.addCandidateForm.get('FirstName').setValue(this.data.fullname.substr(data.fullname.indexOf(',') + 2, data.fullname.length));
        this.addCandidateForm.get('LastName').setValue(this.data.fullname.substr(0, data.fullname.indexOf(',')));
        this.addCandidateForm.get('Destination').setValue(this.data.destination);
        this.addCandidateForm.get('Departure').setValue(this.data.departure);
        this.addCandidateForm.get('Email').setValue(this.data.emailAddress);
        this.addCandidateForm.get('BusinessUnit').setValue(this.data.businessUnit);
        this.addCandidateForm.get('Level').setValue(this.data.level.levelName);
      }

      /* Enable the event listener for departure drop down form element */
      this.departures = this.addCandidateForm.get('Departure').valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this._filter(name) : this.options.slice())
      );
      /* Enable the event listener for the destination drop down form element */
      this.destinations = this.addCandidateForm.get('Destination').valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  /**
   *  Modified incoming value to lowerCase and assigned to const variable filterValue
   * @param value - start character for filter values
   */
  private _filter(value: string): Location[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  /**
   * Click on Submit button inside the addCandidateForm dialog window
   */
  sendInvite() {
    const levelDetails =  this.levelService.getLevelId(this.addCandidateForm.value.Level);

    this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, true);
    this.dialogRef.close();
  }

  /**
   * Click on Save Draft button inside the addCandidateForm dialog window
   */
  saveDraft() {
    const levelDetails =  this.levelService.getLevelId(this.addCandidateForm.value.Level);

    this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, false);
    this.dialogRef.close();
  }

  /**
   * Closing the dialog box - we are setting the form to empty
   */
  onNoClick(): void {
    this.dialogRef.close();

    this.addCandidateForm = this.formBuilder.group({

      FirstName: ['', Validators.required],
      LastName: ['', Validators.required, Validators.minLength(1), Validators.maxLength(30)],
      Email: ['', Validators.required, Validators.email],
      Departure: [''],
      BusinessUnit: [''],
      Destination: ['', Validators.required],

    });
  }

  /**
   * Custom error messages for Firstname, lastname and Email to verify special character or empty errors
   * @param field_name - field parameter to check for errors
   */
  getErrorMessage(field_name) {
    if (field_name === 'FIRST_NAME')
    {
       return this.addCandidateForm.get('FirstName').hasError('required') ? 'You must enter first name' :
        this.addCandidateForm.get('FirstName').hasError('pattern') ? 'Special characters are not allowed' : '';
    }
    if (field_name === 'LAST_NAME')
    {
       return this.addCandidateForm.get('LastName').hasError('required') ? 'You must enter last name' :
        this.addCandidateForm.get('LastName').hasError('pattern') ? 'Special characters are not allowed' : '';
    }
    if (field_name === 'EMAIL')
    {
       return this.addCandidateForm.get('Email').hasError('required') ? 'You must enter email address' :
        this.addCandidateForm.get('Email').hasError('pattern') ? 'You must enter a valid email address' : '';
    }
  }
  
}
