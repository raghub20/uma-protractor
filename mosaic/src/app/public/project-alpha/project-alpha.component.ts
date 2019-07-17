import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { SettingsComponent} from './settings/settings.component';

@Component({
    selector: 'app-project-alpha',
    templateUrl: './project-alpha.component.html',
    styleUrls: ['./project-alpha.component.scss']
})
export class ProjectAlphaComponent {
    public navLinks: {
        label: string;
        path: string;
    }[];
    constructor(private router: Router, public dialog: MatDialog) {
        this.navLinks = [
            {
                label: 'Cost Models',
                path: 'cost-models'
            },
            {
                label: 'Candidates',
                path: 'candidate-profiles'
            },
            {
                label: 'Approved Moves',
                path: 'approved-moves'
            },
            {
                label: 'Explore Destinations',
                path: 'explore-destinations'
            },
            {
                label: 'Services',
                path: 'services'
            }
        ];
    }

    openModal() {
        const dialogRef = this.dialog.open(SettingsComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
