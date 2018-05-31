import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  isChecked: boolean = false;
  isNext: boolean = false;
  selectedTab: number = 3;
  typesParent: any[];

  onCheck(isChecked) {
    this.isChecked = isChecked;
  }

  onNext(types) {
    this.isNext = true;
    this.selectedTab = 2;
    this.typesParent = types;
  }

  ngOnInit() {
    
  }

  isNextDisable(event) {
    if (event > this.selectedTab) {
     // this.isNext = false;
    }

    this.selectedTab = event;
  }
}
