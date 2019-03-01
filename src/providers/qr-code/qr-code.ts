import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import QRCode from 'qrcode';
/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

  constructor(public http: HttpClient, public scanner: BarcodeScanner) {
    console.log('Hello QrCodeProvider Provider');
  }

  generate(text: string): Promise<string> {
    return new Promise((resolve, reject) => {
      QRCode.toDataURL(text, (err, url) => {
        if (err) reject(err);
        resolve(url);
      })
    })

  }

  scan() {
    return this.scanner.scan().then((result: BarcodeScanResult) => {
      console.log(result);
      return result.text;
    });
  }

  getFromImage(){
    
  }

}
