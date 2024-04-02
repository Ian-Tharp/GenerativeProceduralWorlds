import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { LoginComponentComponent } from '../login-component/login-component.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatButtonModule,
  ]
})
export class HeaderComponent implements OnInit {
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }


  login() {
    console.log('login');
    this.dialog.open(LoginComponentComponent);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponentComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout() {
    console.log('logout');
  }

  signup() {
    console.log('signup');
  }
}
