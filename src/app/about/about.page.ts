import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {
  timelineInfo: any = [];
  isDesktop: any = false;
  constructor(public platform: Platform) {}

  ngOnInit() {
    if (this.platform.is('desktop')) {
      this.isDesktop = true;
    }

    this.setTimelineInfo();
  }

  resizeMenu() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  setTimelineInfo() {
    this.timelineInfo = [
      {
        title: 'Bachelors in Computer Science',
        location: 'CMR Institute of Technology, India',
        fromYear: '2015',
        toYear: '2019',
        grade: '8.07 CGPA'
      },
      {
        title: 'Intern',
        location: 'Simeio Solutions, India',
        fromYear: '2018',
        toYear: '2019'
      },
      {
        title: 'Software Engineer',
        location: 'Manhattan Associates, India',
        fromYear: '2019',
        toYear: '2021'
      },
      {
        title: 'MSc in Business Analytics',
        location: 'National University of Ireland Galway',
        fromYear: '2021',
        toYear: '2022',
        grade: '1.1'
      }
    ];
  }
}
