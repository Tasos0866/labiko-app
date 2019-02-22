import { Component, OnInit } from '@angular/core';
import "ag-grid-community";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private columnDefs;
  private rowData = [];
  private defaultColDef;

  constructor() {
    this.columnDefs = [
      { headerName: '', field: 'dayNumberField', width: 38, editable: false, lockPosition: true },
      { headerName: 'March', field: 'dayField', width: 120, lockPosition: true },
      {
        headerName: 'Name1', field: 'statusField1', width: 120, cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          cellHeight: 50,
          values: ["Day", "Night", "Day off", " "]
        }
      },
      {
        headerName: 'Name2', field: 'statusField2', width: 120, cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          cellHeight: 50,
          values: ["Day", "Night", "Day off", " "]
        }
      },
      {
        headerName: 'Name3', field: 'statusField3', width: 120, cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          cellHeight: 50,
          values: ["Day", "Night", "Day off", " "]
        }
      }
    ];
    for (let i = 1; i <= 31; i++) {
      this.rowData.push({
        dayNumberField: i,
        dayField: '',
        statusField1: '',
        statusField2: '',
        statusField3: ''
      });
    }
    this.defaultColDef = {
      editable: true
    };
  }


}