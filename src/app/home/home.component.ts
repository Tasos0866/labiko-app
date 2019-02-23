import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
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

  columnDefs;
  rowData = [];
  defaultColDef;
  private daysOfWeek;
  private daysOfMonth = [];
  private translate: TranslateService;
  private workStatus;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  ngOnInit() {
    if (this.language == "en") {
      this.workStatus = ["DAY", "NIGHT", "DAY OFF", " "];
      this.daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    } else {
      this.workStatus = ["ΠΡΩΙ", "ΒΡΑΔΥ", "ΡΕΠΟ", " "];
      this.daysOfWeek = ["Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο", "Κυριακή"];
    }
    this.columnDefs = [
      { headerName: '', field: 'dayNumberField', width: 38, editable: false, lockPosition: true },
      { headerName: this.month, field: 'dayField', width: 120, editable: false, lockPosition: true },
      {
        headerName: this.firstEmployee, field: 'statusField1', width: 120, cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          cellHeight: 50,
          values: this.workStatus
        }, cellStyle: function (params) {
          if (params.value == "DAY OFF" || params.value == "ΡΕΠΟ") {
            return { color: "red" };
          }
        }
      },
      {
        headerName: this.secondEmployee, field: 'statusField2', width: 120, cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          cellHeight: 50,
          values: this.workStatus
        }, cellStyle: function (params) {
          if (params.value == "DAY OFF" || params.value == "ΡΕΠΟ") {
            return { color: "red" };
          }
        }
      },
      {
        headerName: this.thirdEmployee, field: 'statusField3', width: 120, cellEditor: "agSelectCellEditor",
        cellEditorParams: {
          cellHeight: 50,
          values: this.workStatus
        }, cellStyle: function (params) {
          if (params.value == "DAY OFF" || params.value == "ΡΕΠΟ") {
            return { color: "red" };
          }
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
    // The same months are checked in both languages
    if (month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December" ||
      month == "Ιανουάριος" || month == "Μάρτιος" || month == "Μάιος" || month == "Ιούλιος" || month == "Αύγουστος" || month == "Οκτώβριος" || month == "Δεκέμβριος"
    ) {
      return 31;
    } else if (month == "February" || month == "Φεβρουάριος") {
      return 28;
    } else {
      return 30;
    }
  }

  setLanguage(language: string) {
    this.language = language;
  }
}