import { SharingProvider } from './../../providers/sharing/sharing';
import { HistoricItem } from './../../../typings/storage.d';
import { QrCodeProvider } from './../../providers/qr-code/qr-code';
import { StorageProvider } from './../../providers/storage/storage';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'historic.html'
})
export class HistoricPage {
  public items: Array<{ text: string, date: string }> = [];
  public selectedItem: {
    index: number,
    qrcode: string
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageProvider, public generator: QrCodeProvider, public sharing: SharingProvider) {
    this.storage.getHistoric().then((histo) => {
      const items = histo.map((item) => {
        return {
          text: item.text,
          date: this.getDate(new Date(item.date))
        }
      })
      this.items = items;
    })
  }

  getDate(date: Date) {
    const items = [
      date.getDate().toString(),
      date.getMonth().toString(),
      date.getFullYear().toString(),
      date.getHours().toString(),
      date.getMinutes().toString(),
    ];

    items.forEach((item, index) => {
      if (item.length < 2) items[index] = '0' + item;
    })
    return items[0] + '/' + items[1] + '/' + items[2] + ' ' + items[3] + ':' + items[4]
  }

  itemTapped(item: HistoricItem, index) {
    this.generator.generate(item.text).then((url) => this.selectedItem = {
      index,
      qrcode: url
    }).catch((err) => console.error(err));
  }

  share(item: string) {
    this.sharing.shareQrCode(item);
  }
}
