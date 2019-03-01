import { SharingProvider } from './../../providers/sharing/sharing';
import { StorageProvider } from './../../providers/storage/storage';
import { QrCodeProvider } from './../../providers/qr-code/qr-code';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'generate-code.html'
})
export class GenerateCodePage {

  public text;
  public code = null;
  public error = null;

  constructor(public navCtrl: NavController, public generator: QrCodeProvider, public sharing: SharingProvider, public storage: StorageProvider) {

  }

  public codeGeneration() {
    this.generator.generate(this.text)
      .then((qrcode) => {
        this.code = qrcode;
        this.error = null;
        this.storage.pushInHistoric(this.text);
      })
      .catch((err) => {
        this.error = err;
        this.code = null;
      })
  }

  public share() {
    this.sharing.shareQrCode(this.code).catch((err) => this.error = 'Erreur lors du partage :' + err);
  }


}
