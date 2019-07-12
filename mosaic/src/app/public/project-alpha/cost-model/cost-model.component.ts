import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, Inject, SimpleChanges, Input } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { CandidateProfilesService } from '../../../core/services/candidate-profiles.service';
import { Candidate } from '../../../core/models/candidate';
import { FormGroup } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { Selection } from '../../models/selection.model';
import { CostModel } from '../../../core/models/cost-model';
import { CostModelsService } from '../../../core/services/cost-models.service';
import { ModelColumnsComponent } from './model-columns/model-columns.component';
import { AddCostModelComponent } from './add-cost-model/add-cost-model.component'

@Component({
  selector: 'app-cost-model',
  templateUrl: './cost-model.component.html',
  styleUrls: ['./cost-model.component.scss']
})
export class CostModelComponent implements OnInit {


  displayedColumns: string[] = ['modelName', 'departure', 'destination', 'action',];

  addCandidateForm: FormGroup;
  dataSource: any;
  ELEMENT_DATA: any;
  filterText = '';

  selection = new SelectionModel<CostModel>(true, []);
  columnList: Selection[] = [];

  constructor(public dialog: MatDialog,
    private costModelsService: CostModelsService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  /** To sort the mat table columns */
  @ViewChild(MatSort) sort: MatSort;
  /** To paginate in a mat table */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() selectedCols: Selection[];

  ngOnInit() {
    this.ELEMENT_DATA = this.costModelsService.getCostModels();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.refresh();
  }

  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  updateDataSource() {
    this.ELEMENT_DATA = this.costModelsService.getCostModels();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /* Open the dialog box AddCandidateComponent in EDIT mode when any row is clicked of the mat table*/
  public open(event, data) {
    /*
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

    */
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCostModelComponent, {
     panelClass: 'addCostModelModal',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateDataSource();
    });
  }

  /* Mat data table filtering matching wild characters */
  applyFilter(filterValue) {
    this.filterText = filterValue.trim();
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
  filterResults(test){}
  openModal(): void {
    const dialogRef = this.dialog.open(ModelColumnsComponent, {
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
     
  }

}
