import { Component, OnInit, Output, OnDestroy, Input, EventEmitter, Inject } from '@angular/core';
import { Selection } from '../../../../core/models/selection.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

/**
 * Base Component for settings
 */
@Component({
  selector: 'app-candidate-columns',
  templateUrl: './candidate-columns.component.html',
  styleUrls: ['./candidate-columns.component.scss']
})

export class CandidateColumnsComponent implements OnInit, OnDestroy {
  /** 
   * Prop to store the column names and flag details
   */
  columnsList: Selection[] = [
    {
      displayName: 'Full Name',
      value: 'fullname',
      flag: true,
      disabled: true
    },
    {
      displayName: 'Status',
      value: 'status',
      flag: true,
      disabled: true
    },
    {
      displayName: 'Email',
      value: 'emailAddress',
      flag: false,
      disabled: false
    },
    {
      displayName: 'Level',
      value: 'level.levelName',
      flag: true,
      disabled: false
    },
    {
      displayName: 'Business Unit',
      value: 'businessUnit',
      flag: false,
      disabled: false
    },
    {
      displayName: 'Departure',
      value: 'departure',
      flag: true,
      disabled: false
    },
    {
      displayName: 'Destination',
      value: 'destination',
      flag: true,
      disabled: false
    },
      {
      displayName: 'Status Date',
      value: 'lastUpdatedDate',
      flag: false,
      disabled: false
    },
    {
      displayName: 'Invitation Sent Date',
      value: 'invitationSentDate',
      flag: false,
      disabled: false
    },
    {
      displayName: 'Created By',
      value: 'createdBy',
      flag: false,
      disabled: false
    }
  ];
  /**
   * Prop to store the updated column list
   */
  selectedColumnsList: Selection[] = [];
  /**
   * It stores the value for media observer
   */
  gridColumn: number;
  /**
   * It Emits the data to the parent component
   */
  @Output() columnsListUpdated = new EventEmitter<Selection[]>();
  /**
   * media subscription
   */
  mediasbscription: Subscription;
  /**
   * Initializes the value
   * @param dialogRef Instance for DialogRef
   * @param mediaobserver Instance for media observer
   * @param data Instance for mat dialog data
   */
  constructor(public dialogRef: MatDialogRef<CandidateColumnsComponent>,
    private mediaobserver: MediaObserver, @Inject(MAT_DIALOG_DATA) public data: string[], ) {
    this.mediasbscription = mediaobserver.asObservable().subscribe((val: MediaChange[]) => {
      if (val[0].mqAlias === 'xs') {
        this.gridColumn = 1;
      } else {
        this.gridColumn = 2;
      }
    });
  }
  /**
   * It resets the value for the view props
   */
  ngOnInit() {
    this.columnsList.forEach((col, ind) => {
      this.data.forEach((data, index) => {
      if (col.value === data) {
      col.flag = true;
      this.selectedColumnsList.push(col);
      } else {
      if (this.columnsList.findIndex(val => val.value !== data) > 0) {
      col.flag = false;
      }
      }
      });
      });
  }
  /**
   * Method to initialize the selected array list
   */
  populateArray(): void {
    this.selectedColumnsList = [
      {
        displayName: 'Full Name',
        value: 'fullname',
        flag: true,
        disabled: true
      },
      {
        displayName: 'Level',
        value: 'level.levelName',
        flag: true,
        disabled: false
      },
      {
        displayName: 'Departure',
        value: 'departure',
        flag: true,
        disabled: false
      },
      {
        displayName: 'Destination',
        value: 'destination',
        flag: true,
        disabled: false
      },
      {
        displayName: 'Status',
        value: 'status',
        flag: true,
        disabled: true
      }
    ];
  }
  /**
   * updates the new column list
   * @param selected - sends the selected array value
   * @param isChecked - prop for check box selected value
   */
  // updateChkbxArray(selected: any, isChecked: boolean) {
  //   if (isChecked) {
  //     if (this.columnsList.findIndex(x => x.value === selected.value)) {
  //       this.selectedColumnsList.splice(this.selectedColumnsList.length-1, 0,{ displayName: selected.displayName, value: selected.value, flag: isChecked, disabled: selected.disabled });
  //       this.columnsList.forEach((col, index) => {
  //         if (selected.value === col.value) {
  //           col.flag = true;
  //         }
  //       });
  //     }
  //   } else {
  //     const ind: number = this.selectedColumnsList.findIndex(y => y.value === selected.value);
  //     if (ind !== -1) {
  //       this.selectedColumnsList.splice(ind, 1);
  //       this.columnsList.forEach((col, index) => {
  //         if (selected.value === col.value) {
  //           col.flag = false;
  //         }
  //       });
  //     }
  //   }
  // }
  updateChkbxArray(selected: any) {
    const index = this.columnsList.findIndex(x => x.value === selected.value);
    this.columnsList[index].flag = !selected.flag;
     if (this.columnsList[index].flag===true) {
         this.selectedColumnsList.splice(this.selectedColumnsList.length - 1, 
          0, { displayName: selected.displayName, value: selected.value, flag: !selected.flag, disabled: selected.disabled }); }
     else
     {
       const ind: number = this.selectedColumnsList.findIndex(y=>y.value == selected.value);
       if (ind !== -1) {
          this.selectedColumnsList.splice(ind, 1);
     }
    }
   }
  /**
    * Closing the dialog box - we are setting the form to empty
    */
  onNoClick(): void {
    this.dialogRef.close();
  }
  /**
   * Resets the value to default version
   */
  resetValues(): void {
    this.populateArray();
    this.columnsList.forEach((obj) => {
    const existData = this.selectedColumnsList.find(({ value }) => obj.value === value);
    if (!existData) {
    obj.flag = false;
    } else{
    obj.flag = true;
    }
    });
    }
  /**
   * Emits the updated array to parent component
   */
  save(): void {
    this.dialogRef.close();
    this.columnsListUpdated.emit(this.selectedColumnsList);
  }
  /**
   * destroys the object
   */
  ngOnDestroy() {
    this.mediasbscription.unsubscribe();
  }
}

