import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  day: string;
  month: string;
  firstEmployee: string;
  secondEmployee: string;
  thirdEmployee: string;
  showGrid = false;
  months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  nextClicked(day: string, month: string, firstEmployee: string, secondEmployee: string, thirdEmployee: string) {
    if ((day != "") && (month != "") && (firstEmployee != "") && (secondEmployee != "") && (thirdEmployee != "")) {
      this.day = day;
      this.month = month;
      this.firstEmployee = firstEmployee;
      this.secondEmployee = secondEmployee;
      this.thirdEmployee = thirdEmployee;
      this.showGrid = true;
    }
  }
}
