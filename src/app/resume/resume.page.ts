import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss']
})
export class ResumePage implements OnInit {
  isDesktop: any = false;
  constructor(public platform: Platform) {}

  ngOnInit() {
    if (this.platform.is('desktop')) {
      this.isDesktop = true;
    }
  }

  resizeMenu() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
}
