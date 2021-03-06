import { StorageProvider } from './../providers/storage/storage';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HistoricPage } from './../pages/historic/historic';
import { GenerateCodePage } from '../pages/generate-code/generate-code';
import { ReadCodePage } from '../pages/read-code/read-code';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GenerateCodePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: StorageProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Générer un QR code', component: GenerateCodePage },
      { title: 'Historique', component: HistoricPage },
      { title: 'Lecture de QR code', component: ReadCodePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.getHistoric().then((histo) => {
        if (!histo) {
          this.storage.set('historic', []);
        }
      })
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
