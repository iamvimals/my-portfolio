import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss']
})
export class PortfolioPage implements OnInit {
  projectsInfo: any = [];
  isDesktop: any = false;
  constructor(public platform: Platform) {}

  ngOnInit() {
    if (this.platform.is('desktop')) {
      this.isDesktop = true;
    }
    this.setProjectInfo();
  }

  resizeMenu() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  setProjectInfo() {
    this.projectsInfo = [
      {
        category: 'Image Recognition',
        title: 'Lorem Ipsum is simply',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: 'Jan 15, 2021',
        url: 'Portfolio-Angular-master',
        icon: 'logo-python'
      },
      {
        category: 'NLP',
        title: 'Lorem Ipsum is simply',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: 'Jan 15, 2021',
        url: 'Portfolio-Angular-master',
        icon: 'language-outline'
      },
      {
        category: 'Statistics',
        title: 'Lorem Ipsum is simply',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: 'Jan 15, 2021',
        url: 'Portfolio-Angular-master',
        icon: 'stats-chart-outline'
      },
      {
        category: 'Data Visualization',
        title: 'Lorem Ipsum is simply',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: 'Jan 15, 2021',
        url: 'Portfolio-Angular-master',
        icon: 'stats-chart-outline'
      },
      {
        category: 'Tableau',
        title: 'Lorem Ipsum is simply',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: 'Jan 15, 2021',
        url: 'Portfolio-Angular-master',
        icon: 'logo-tableau'
      },
      {
        category: 'R',
        title: 'Lorem Ipsum is simply',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: 'Jan 15, 2021',
        url: 'Portfolio-Angular-master',
        icon: './../assets/images/github-image.png'
      },
      {
        category: 'R',
        title: 'Lorem Ipsum is simply',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        date: 'Jan 15, 2021',
        url: 'Portfolio-Angular-master',
        icon: ''
      }
    ];
  }
}
