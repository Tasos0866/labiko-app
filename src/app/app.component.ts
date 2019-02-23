import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private translate: TranslateService;
  language: string;
  day: string;
  month: string;
  firstEmployee: string;
  secondEmployee: string;
  thirdEmployee: string;
  showGrid: boolean;
  months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  private homeComponent: any;

  constructor(translate: TranslateService) {
    this.translate = translate;
    translate.setDefaultLang("en");
    this.showGrid = false;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
    this.homeComponent = new HomeComponent();
    this.homeComponent.setLanguage(language);
  }

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
