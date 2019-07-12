import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, Inject, Input, SimpleChanges } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { ApprovedMove } from '../../../core/models/approved-move';
import { ApprovedMovesService } from '../../../core/services/approved-moves.service';
import { MoveColumnsComponent } from '../authorized-move/move-columns/move-columns.component';
import { Selection } from '../../models/selection.model';
import {TransfereeDetailsComponent} from './transferee-details/transferee-details.component';

@Component({
  selector: 'app-authorized-move',
  templateUrl: './authorized-move.component.html',
  styleUrls: ['./authorized-move.component.scss']
})
export class AuthorizedMoveComponent implements OnInit {

  displayedColumns: string[] = ['select', 'fullname', 'authorizedAmount', 'departure', 'destination', 'status'];

  addCandidateForm: FormGroup;
  dataSource: any;
  ELEMENT_DATA: any;
  filterText = '';

  columnList: Selection[] = [];

  /** Input prop for receiving data*/

  selection = new SelectionModel<ApprovedMove>(true, []);

  constructor(public dialog: MatDialog,
    private aprovedMovesService: ApprovedMovesService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  /** To sort the mat table columns */
  @ViewChild(MatSort) sort: MatSort;
  /** To paginate in a mat table */
  @ViewChild(MatPaginator) paginator: MatPaginator;

   /** Input prop for receiving data*/
  @Input() selectedCols: Selection[];

  ngOnInit() {
    this.ELEMENT_DATA = this.aprovedMovesService.getApprovedMoves();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.refresh();
  }

  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  updateDataSource() {
    this.ELEMENT_DATA = this.aprovedMovesService.getApprovedMoves();
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

  checkboxLabel(row?: ApprovedMove): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.candidate.fullname + 1}`;
  }

  /* Open the dialog box AddCandidateComponent in EDIT mode when any row is clicked of the mat table*/
  public open(event, data) {
    const dialogRef = this.dialog.open(TransfereeDetailsComponent, {
      panelClass: 'tranfereeDetailsModal'
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
  /* Mat data table filtering matching wild characters */
  applyFilter(filterValue) {
    //this.filterText = filterValue.trim();
    //console.log(this.dataSource);
   // console.log(this.filterText);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* Resend Invite Modal window */
  openAlert(event: any) {
    /*
    const dialogRef = this.dialog.open(ResendInviteComponent);

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });

    event.stopPropagation();
    */
  }

  public ngOnChanges(changes: SimpleChanges) {
    if ('selectedCols' in changes) {
      this.selectedCols.forEach((item, index) => {
        if (this.displayedColumns.indexOf(item.value) < 0) {
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

  filterResults(filterVal) {
    this.applyFilter(filterVal);
  }


  openModal(): void {
    const dialogRef = this.dialog.open(MoveColumnsComponent, {
      panelClass: 'DisplayedColumnsModal',
      data: this.displayedColumns
    });
    const res = dialogRef.componentInstance.columnsListUpdated.subscribe((response: Selection[]) => {      
      this.columnList = response;
      this.selectedCols = this.columnList;
      this.updateTable();
    });
  }

  updateTable(){
    this.selectedCols.forEach((item, index) => {
      if (this.displayedColumns.indexOf(item.value) < 0) {
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
