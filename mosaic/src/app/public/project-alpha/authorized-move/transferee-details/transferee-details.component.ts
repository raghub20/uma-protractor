import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
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

@Component({
  selector: 'app-transferee-details',
  templateUrl: './transferee-details.component.html',
  styleUrls: ['./transferee-details.component.scss']
})
export class TransfereeDetailsComponent {
  panelOpenState = false;
  /**Form group name */
  transfereeDetailsForm: FormGroup;
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

  /**
   * Initializes form elements
   * @param formBuilder - property for form elements
   * @param dialogRef - property for mat dialog reference
   * @param data - contains popup data
   * @param candidateProfilesService - service parameter
   * @param changeDetectorRef - property for change detections
   */
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TransfereeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Candidate,
    private candidateProfilesService: CandidateProfilesService,
    private locationService : LocationService,
    private levelService : LevelService,
    private changeDetectorRef: ChangeDetectorRef) {

      /* Setting default title of the dialof window */
      this.title = 'Transferee Details';

      /* Get all the locations for destination and departure */
      this.options = this.locationService.getLocations();

      /* Get all the locations for destination and departure */
      this.levels = this.levelService.getLevels();

      /* Create the Add/Edit dialog window */
      this.transfereeDetailsForm = this.formBuilder.group({
        FirstName: ['', Validators.compose([
            Validators.required, 
            Validators.pattern('^[a-zA-Z0-9]*$')]
          )],
        Name: ['', Validators.compose([
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
        this.transfereeDetailsForm.get('FirstName').setValue(this.data.fullname.substr(data.fullname.indexOf(',') + 2, data.fullname.length));
        this.transfereeDetailsForm.get('Name').setValue(this.data.fullname.substr(0, data.fullname.indexOf(',')));
        this.transfereeDetailsForm.get('Destination').setValue(this.data.destination);
        this.transfereeDetailsForm.get('Departure').setValue(this.data.departure);
        this.transfereeDetailsForm.get('Email').setValue(this.data.emailAddress);
        this.transfereeDetailsForm.get('BusinessUnit').setValue(this.data.businessUnit);
        this.transfereeDetailsForm.get('Level').setValue(this.data.level.levelName);
        this.transfereeDetailsForm.get('AmountAuthorized').setValue('10,000 USD');
        this.transfereeDetailsForm.get('AmountRemaining').setValue('10,000 USD');
      }

      /* Enable the event listener for departure drop down form element */
      this.departures = this.transfereeDetailsForm.get('Departure').valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this._filter(name) : this.options.slice())
      );
      /* Enable the event listener for the destination drop down form element */
      this.destinations = this.transfereeDetailsForm.get('Destination').valueChanges
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
   * Click on Submit button inside the transfereeDetailsForm dialog window
   */
  sendInvite() {
    const levelDetails =  this.levelService.getLevelId(this.transfereeDetailsForm.value.Level);

    this.candidateProfilesService.addCandidateProfile(this.transfereeDetailsForm.value, levelDetails);
    this.dialogRef.close();
  }

  /**
   * Closing the dialog box - we are setting the form to empty
   */
  onNoClick(): void {
    this.dialogRef.close();

    this.transfereeDetailsForm = this.formBuilder.group({

      FirstName: ['', Validators.required],
      Name: ['', Validators.required, Validators.minLength(1), Validators.maxLength(30)],
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
       return this.transfereeDetailsForm.get('FirstName').hasError('required') ? 'You must enter first name' :
        this.transfereeDetailsForm.get('FirstName').hasError('pattern') ? 'Special characters are not allowed' : '';
    }
    if (field_name === 'NAME')
    {
       return this.transfereeDetailsForm.get('Name').hasError('required') ? 'You must enter a name' :
        this.transfereeDetailsForm.get('Name').hasError('pattern') ? 'Special characters are not allowed' : '';
    }
    if (field_name === 'EMAIL')
    {
       return this.transfereeDetailsForm.get('Email').hasError('required') ? 'You must enter email address' :
        this.transfereeDetailsForm.get('Email').hasError('pattern') ? 'You must enter a valid email address' : '';
    }
  }

}
