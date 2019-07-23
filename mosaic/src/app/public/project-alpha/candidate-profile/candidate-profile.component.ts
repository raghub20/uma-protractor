import { Component, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateColumnsComponent } from './candidate-columns/candidate-columns.component';
import { Selection } from '../../../core/models/selection.model';
import { NotificationsService } from '../../../../../src/app/core/services/notifications.service';
@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
/**Class for  CandidateProfileComponent*/
export class CandidateProfileComponent implements OnInit {

  @ViewChild(CandidateDetailsComponent) childObj :CandidateDetailsComponent;

  columnList: Selection[] = [];

  constructor(public dialog: MatDialog, private notificationsService: NotificationsService ) { }
/**To write  */
  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCandidateComponent, {
     panelClass: 'addCandidateModal',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.childObj.updateDataSource();
      this.notificationsService.flashNotification('success','Candidate added successfully', true, 'dismiss');
    });
  }

  filterResults(filterVal){
    this.childObj.applyFilter(filterVal);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(CandidateColumnsComponent, {
      panelClass: 'DisplayedColumnsModal',
      data: this.childObj.displayedColumns
    });
    const res = dialogRef.componentInstance.columnsListUpdated.subscribe((response: Selection[]) => {    
      this.columnList = response;
    });
  }
}
