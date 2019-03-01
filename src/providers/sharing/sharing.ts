import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SharingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharingProvider {

  constructor(public http: HttpClient, public sharing: SocialSharing) {
  }

  public shareQrCode(img: string) {
    var options = {
      subject: 'qrcode', 
      files: [img],
      chooserTitle: 'Partager un QRCode'
    }; 

    return this.sharing.shareWithOptions(options);
  }

}
