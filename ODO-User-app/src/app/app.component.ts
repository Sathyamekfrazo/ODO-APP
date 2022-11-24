import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  Pages = [
    {
      title: 'Order',
      url: '',
      icon: 'cube',
    },
    {
      title: 'Help',
      url: '/login',
      icon: 'person',
    },
    {
      title: 'Refer',
      url: '/register',
      icon: 'repeat',
    },
  ];

  constructor(
    public router: Router,
    private platform: Platform,
    public alertController: AlertController // private statusBar: StatusBar, // private splashScreen: SplashScreen
  ) {}

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  activeIndex() {
    this.router.navigateByUrl('/add-vechile');
  }
  activeIndex1(){
    this.router.navigateByUrl('/documents-repository');
  }
  addDocuments() {
    this.router.navigateByUrl('/documents-repository');
  }
  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you Sure want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Logout',
          role: 'confirm',
          handler: () => {
            this.router.navigateByUrl('/login');
          },
        },
      ],
    });
    await alert.present();
  }
}
