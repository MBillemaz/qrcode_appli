import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadCodePage } from './read-code';

@NgModule({
  declarations: [
    ReadCodePage,
  ],
  imports: [
    IonicPageModule.forChild(ReadCodePage),
  ],
})
export class ReadCodePageModule {}
