import { QrCodeProvider } from './../../providers/qr-code/qr-code';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import jsqrCode from 'jsqrcode/src/qrcode';
/**
 * Generated class for the ReadCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-code',
  templateUrl: 'read-code.html',
})
export class ReadCodePage {

  public text;
  constructor(public navCtrl: NavController, public navParams: NavParams, public qrcode: QrCodeProvider) {
  }

  scan() {
    this.qrcode.scan().then((result) => this.text = result);
  }

  getByImage(event) {
    if (event.target.files.length !== 0) {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onloadend = (evt) => {
        const target: any = evt.currentTarget;

        const test = new Image();

        test.onload = () => {
          const qrcode = new jsqrCode();
          this.text = qrcode.decode(test);
        };

        test.src = target.result;

      }
      reader.readAsDataURL(file);

    }
  }

}
