import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HistoricPage } from './../pages/historic/historic';
import { GenerateCodePage } from '../pages/generate-code/generate-code';
import { ReadCodePage } from '../pages/read-code/read-code';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StorageProvider } from '../providers/storage/storage';
import { IonicStorageModule } from '@ionic/storage';
import { SharingProvider } from '../providers/sharing/sharing';

@NgModule({
  declarations: [
    MyApp,
    GenerateCodePage,
    HistoricPage,
    ReadCodePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GenerateCodePage,
    HistoricPage,
    ReadCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    BarcodeScanner,
    SocialSharing,
    StorageProvider,
    SharingProvider
  ]
})
export class AppModule {}
