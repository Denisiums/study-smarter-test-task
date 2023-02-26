import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.scss']
})
export class WeekdaysComponent implements OnInit {
  // in bigger project we would have moment.js or date-fns to operate and format dates in a more convenient way,
  // but it doesn't worth having another dependency here,
  // also we don't track user locale (because 1st day of the week can differ)
  currentDay = 0;
  daysText: {[key: string]: string} = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  };
  weekDays = [1, 2, 3, 4, 5, 6, 0];


  ngOnInit() {
    // we suppose there is no requirement to keep the weekday fresh after page load
    this.setCurrentDay();
  }

  private setCurrentDay(): void {
    const now = new Date();
    this.currentDay = now.getUTCDay();
  }
}
