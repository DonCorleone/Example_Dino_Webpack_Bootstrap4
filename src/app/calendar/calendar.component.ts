import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  ngOnInit() {

   /* $(document).ready(function () {
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1;
      const year = dateObj.getUTCFullYear();
      const day = dateObj.getDate();
      const today = year + '-' + month + '-' + day;
      $('.responsive-calendar').responsiveCalendar({
        time: year + '-' + month,
        events: {
          '2017-08-19': {},
          '2017-08-20': {},
          '2017-08-23': {},
          '2017-08-26': {},
          '2017-08-27': {},
          '2017-08-30': {},
          '2017-09-03': {},
          '2017-09-06': {},
          '2017-09-09': {},
          '2017-09-10': {},
          '2017-09-13': {},
          '2017-09-16': {},
          '2017-09-17': {},
          '2017-09-20': {'class': 'active-special'},
          '2017-09-22': {'class': 'active-special'},
          '2017-09-23': {},
          '2017-09-24': {},
          '2017-09-27': {'class': 'active-special'},
          '2017-09-29': {},
          '2017-09-30': {},
          '2017-10-01': {}
        },
        activateNonCurrentMonths: true,
        allRows: false
      });
    }); */
  }
}
