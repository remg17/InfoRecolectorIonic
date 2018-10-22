import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrucksPage } from './trucks';

@NgModule({
  declarations: [
    TrucksPage,
  ],
  imports: [
    IonicPageModule.forChild(TrucksPage),
  ],
})
export class TrucksPageModule {}
