import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteStopsPage } from './route-stops';

@NgModule({
  declarations: [
    RouteStopsPage,
  ],
  imports: [
    IonicPageModule.forChild(RouteStopsPage),
  ],
})
export class RouteStopsPageModule {}
