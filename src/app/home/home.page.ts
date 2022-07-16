import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  areasInfo: any = [];
  toolsInfo: any = [];
  languagesInfo: any = [];
  librariesInfo: any = [];
  articlesInfo: any = [];
  isDesktop: any = false;
  constructor(public platform: Platform) {
    if (this.platform.is('desktop')) {
      this.isDesktop = true;
    }
    this.setProjectInfo();
    this.setSkillsInfo();
    console.log('Desktop ' + this.isDesktop);
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
    this.areasInfo = [
      {
        areaName: 'Data Analytics',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        icon: 'analytics-outline'
      },
      {
        areaName: 'Machine Learning',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        icon: 'terminal-outline'
      },
      {
        areaName: 'Business Intelligence',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        icon: 'logo-python'
      },
      {
        areaName: 'Data Visualization',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        icon: 'stats-chart-outline'
      },
      {
        areaName: 'Data Mining',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        icon: 'logo-python'
      },
      {
        areaName: 'Cloud Computing',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        icon: 'cloud-outline'
      }
    ];
  }

  setSkillsInfo() {
    this.toolsInfo = [
      {
        title: 'Tableau',
        rating: '10',
        logo: '../../assets/files/tableau-logo.jpg'
      },
      {
        title: 'Power BI',
        rating: '5',
        logo: '../../assets/files/powerbi-logo.png'
      }
    ];

    this.languagesInfo = [
      {
        title: 'Python',
        rating: '9',
        logo: '../../assets/files/python-logo.png'
      },
      {
        title: 'SQL',
        rating: '8',
        logo: '../../assets/files/sql-logo.png'
      },
      {
        title: 'R',
        rating: '7',
        logo: '../../assets/files/r-logo.svg'
      },
      {
        title: 'Javascript',
        rating: '9',
        logo: '../../assets/files/javascript-logo.png'
      }
    ];

    this.librariesInfo = [
      {
        title: 'Numpy',
        rating: '9',
        logo: '../../assets/files/numpy-logo.png'
      },
      {
        title: 'Pandas',
        rating: '8',
        logo: '../../assets/files/pandas-logo.png'
      },
      {
        title: 'Scikit-Learn',
        rating: '7',
        logo: '../../assets/files/scikitlearn-logo.png'
      },
      {
        title: 'D3.js',
        rating: '7',
        logo: '../../assets/files/d3js-logo.png'
      },
      {
        title: 'MatplotLib',
        rating: '7',
        logo: '../../assets/files/matplotlib-logo.png'
      },
      {
        title: 'Tensorflow',
        rating: '7',
        logo: '../../assets/files/tensorflow-logo.png'
      }
    ];

    this.articlesInfo = [
      {
        title: 'MatplotLib',
        description: '7',
        logo: '../../assets/files/matplotlib-logo.png'
      }
    ];
  }
}
