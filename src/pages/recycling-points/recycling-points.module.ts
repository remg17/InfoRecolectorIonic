import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecyclingPointsPage } from './recycling-points';

@NgModule({
  declarations: [
    RecyclingPointsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecyclingPointsPage),
  ],
})
export class RecyclingPointsPageModule {}
