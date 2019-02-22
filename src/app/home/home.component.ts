import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  columnDefs = [
    { headerName: 'Day', field: 'dayNumberField', width: 30 },
    { headerName: 'March', field: 'dayField', width: 120 },
    { headerName: 'Name1', field: 'status1Field', width: 120 },
    { headerName: 'Namw2', field: 'status2Field', width: 120, },
    { headerName: 'Name3', field: 'status3Field', width: 120 }
  ];

  rowData = [
    { dayNumberField: '1', dayField: 'Monday', status1Field: 'prwi', status2Field: 'vradi', status3Field: 'repo' },
    { dayNumberField: '2', dayField: 'Tuesday', status1Field: 'prwi', status2Field: 'repo', status3Field: 'vradi' },
    { dayNumberField: '3', dayField: 'Wednesday', status1Field: 'repo', status2Field: 'prwi', status3Field: 'vradi' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
