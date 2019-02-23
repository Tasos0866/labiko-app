import { Component, Input, OnInit } from '@angular/core';
import "ag-grid-community";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input("language") language: string;
  @Input("month") month: string;
  @Input("day") firstMonthDay: string;
  @Input("first_employee") firstEmployee: string;
  @Input("second_employee") secondEmployee: string;
  @Input("third_employee") thirdEmployee: string;

  private columnDefs;
  private rowData = [];
  private defaultColDef;
  private daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  private daysOfMonth = [];

  ngOnInit() {
    this.columnDefs = [
      { headerName: '', field: 'dayNumberField', width: 38, editable: false, lockPosition: true },
      { headerName: this.month, field: 'dayField', width: 120, editable: false, lockPosition: true },
      {
        headerName: this.firstEmployee, field: 'statusField1', width: 120, cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          cellHeight: 50,
          values: ["Day", "Night", "Day off", " "]
        }
      },
      {
        headerName: this.secondEmployee, field: 'statusField2', width: 120, cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          cellHeight: 50,
          values: ["Day", "Night", "Day off", " "]
        }
      },
      {
        headerName: this.thirdEmployee, field: 'statusField3', width: 120, cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          cellHeight: 50,
          values: ["Day", "Night", "Day off", " "]
        }
      }
    ];
    this.defaultColDef = {
      editable: true
    };

    this.setDaysOfMonth(this.firstMonthDay);

    for (let i = 1; i <= this.getNumberOfDays(this.month); i++) {
      this.rowData.push({
        dayNumberField: i,
        dayField: this.daysOfMonth[i - 1],
        statusField1: '',
        statusField2: '',
        statusField3: ''
      });
    }
  }

  setDaysOfMonth(day: string) {
    let index = this.daysOfWeek.indexOf(day);
    let totalMonthdays = this.getNumberOfDays(this.month);
    for (let i = 0; i < totalMonthdays; i = i + 7) {
      this.daysOfMonth[i] = this.daysOfWeek[index];
      for (let j = 1; j <= 7 && i + j < totalMonthdays; j++)
        this.daysOfMonth[i + j] = this.daysOfWeek[(index + j) % 7];
    }
  }

  getNumberOfDays(month: string) {
    if (month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December") {
      return 31;
    } else if (month == "February") {
      return 28;
    } else {
      return 30;
    }
  }

  setLanguage(language: string) {
    this.language = language;
  }
}