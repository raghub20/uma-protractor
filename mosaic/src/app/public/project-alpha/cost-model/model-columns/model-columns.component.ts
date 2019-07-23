import { Component, OnInit, Output, OnDestroy, Input, EventEmitter, Inject } from '@angular/core';
import { Selection } from '../../../../core/models/selection.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-model-columns',
  templateUrl: './model-columns.component.html',
  styleUrls: ['./model-columns.component.scss']
})
export class ModelColumnsComponent implements OnInit {

  /** 
   * Prop to store the column names and flag details
   */
  columnsList: Selection[] = [
    {
      displayName: 'Model Name',
      value: 'modelName',
      flag: true,
      disabled: true
    },
    {
      displayName: 'Delete',
      value: 'action',
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
      displayName: 'Last Update Date',
      value: 'updateDate',
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
  constructor(public dialogRef: MatDialogRef<ModelColumnsComponent>,
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
    this.data.forEach((item, index) => {
      this.columnsList.forEach((col, index) => {
        if (item === col.value) {
          col.flag = true;
          this.selectedColumnsList.push(col);
        }else {
          if (this.columnsList.findIndex(val => val.value !==item) > 0) {
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
        displayName: 'Model Name',
        value: 'modelName',
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
        displayName: 'Delete',
        value: 'action',
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
  updateChkbxArray(selected: any, isChecked: boolean) {
    if (isChecked) {
      if (this.columnsList.findIndex(x => x.value === selected.value)) {
        this.selectedColumnsList.splice(this.selectedColumnsList.length-1, 0,{ displayName: selected.displayName, value: selected.value, flag: isChecked, disabled: selected.disabled });
        this.columnsList.forEach((col, index) => {
          if (selected.value === col.value) {
            col.flag = true;
          }
        });
      }
    } else {
      const ind: number = this.selectedColumnsList.findIndex(y => y.value === selected.value);
      if (ind !== -1) {
        this.selectedColumnsList.splice(ind, 1);
        this.columnsList.forEach((col, index) => {
          if (selected.value === col.value) {
            col.flag = false;
          }
        });
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
  resetValues(): void {
    this.populateArray();
    this.columnsList.forEach((col, ind) => {
      if ((col.value !== 'modelName') && (col.value != 'level.levelName') && (col.value != 'departure') && (col.value != 'destination') && (col.value != 'action')) {
        col.flag = false;
      }
    });
  }
  /**
   * Emits the updated array to parent component
   */
  save(): void {
    this.dialogRef.close();
    this.columnsListUpdated.emit(this.selectedColumnsList);
  };
  /**
   * destroys the object
   */
  ngOnDestroy() {
    this.mediasbscription.unsubscribe();
  }
}
