import { HistoricItem } from './../../../typings/storage.d';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient, public storage: Storage) {

  }

  getHistoric(): Promise<HistoricItem[]> {
    return this.storage.get('historic');
  }

  pushInHistoric(text: string) {
    this.storage.get('historic').then((histo: HistoricItem[]) => {
      histo.push({
        text,
        date: new Date()
      })
      this.storage.set('historic', histo);
    })
  }

  set(key: string, item: any){
    this.storage.set(key, item);
  }

}
