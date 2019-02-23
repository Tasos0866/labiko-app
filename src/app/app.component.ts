import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  day: string;
  month: string
  showGrid = false;
  months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  nextClicked(day: string, month: string) {
    if ((day != "") && (month != "")) {
      this.day = day;
      this.month = month;
      this.showGrid = true;
    }
  }
}
