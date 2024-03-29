import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, Inject, Input, SimpleChanges } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { CandidateProfilesService } from '../../../../core/services/candidate-profiles.service';
import { Candidate } from '../../../../core/models/candidate';
import { AddCandidateComponent } from '../add-candidate/add-candidate.component';
import { FormGroup } from '@angular/forms';
import { ResendInviteComponent } from '../resend-invite/resend-invite.component';
import { RouterLinkWithHref } from '@angular/router';
import { Selection } from '../../../models/selection.model';
import {TransfereeAssessmentComponent} from '../transferee-assessment/transferee-assessment.component';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CandidateDetailsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'fullname', 'level', 'departure', 'destination', 'status'];

  addCandidateForm: FormGroup;
  dataSource: any;
  ELEMENT_DATA: any;
  filterText = '';

  selection = new SelectionModel<Candidate>(true, []);

  constructor(public dialog: MatDialog,
    private candidateProfilesService: CandidateProfilesService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  /** To sort the mat table columns */
  @ViewChild(MatSort) sort: MatSort;
  /** To paginate in a mat table */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /** Input prop for receiving data*/
  @Input() selectedCols: Selection[];
  

  ngOnInit() {
    this.ELEMENT_DATA = this.candidateProfilesService.getCandidateProfiles();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.refresh();
  }

  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  updateDataSource() {
    this.ELEMENT_DATA = this.candidateProfilesService.getCandidateProfiles();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /* Method to check if all the rows in the mat table were selected*/
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /* Method to toggle select all or clear all for rows inside in the mat table */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Candidate): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.fullname + 1}`;
  }

  /* Open the dialog box AddCandidateComponent in EDIT mode when any row is clicked of the mat table*/
  public open(event, data) {
    if (data.isAssessmentReceived) {
      const dialogRef = this.dialog.open(TransfereeAssessmentComponent, {
        panelClass: 'transfereeAssessmentModal',
        data: data
      });
  
      //    this.selection.select = data;
      console.log(data, 'ok you clicked on a table row....');
  
      dialogRef.afterOpened().subscribe(result => {
        console.log('This dialog was opened');
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    else{
      const dialogRef = this.dialog.open(AddCandidateComponent, {
        panelClass: 'addCandidateModal',
        data: data
      });
  
      //    this.selection.select = data;
      console.log(data, 'ok you clicked on a table row....');
  
      dialogRef.afterOpened().subscribe(result => {
        console.log('This dialog was opened');
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }

  /* Mat data table filtering matching wild characters */
  applyFilter(filterValue) {
    this.filterText = filterValue.trim();
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* Resend Invite Modal window */
  openAlert(event: any) {
    const dialogRef = this.dialog.open(ResendInviteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    event.stopPropagation();
  }
  public ngOnChanges(changes: SimpleChanges) {
    if ('selectedCols' in changes) {
      this.selectedCols.forEach((item, index) => {
        console.log(this.selectedCols);

        if (this.displayedColumns.indexOf(item.value) < 0) {
          console.log(item.value);
          this.displayedColumns.push(item.value);
        }
        else {
          this.displayedColumns = this.displayedColumns.filter((val) => {
            return item.value == val;
          });
        }
      });
      if (this.displayedColumns.findIndex(val => val === 'select') < 0) {
        this.displayedColumns.unshift('select');
      }
    }
  }

}



