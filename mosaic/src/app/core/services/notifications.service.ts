import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  setAutoHide: boolean = true;
  autoHide: number = 1500;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  addExtraClass: boolean = false;

  constructor(public snackBar: MatSnackBar) { }

  flashNotification(...params) {
    let notificationType = params[0];
    let message = params[1];
    let action = params[2];
    let actionButtonLabel = params[3];

    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.panelClass = notificationType;
    this.snackBar.open(message, action ? actionButtonLabel : undefined, config);

  }
}
