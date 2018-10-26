import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteSchedulesPage } from './route-schedules';

@NgModule({
  declarations: [
    RouteSchedulesPage,
  ],
  imports: [
    IonicPageModule.forChild(RouteSchedulesPage),
  ],
})
export class RouteSchedulesPageModule {}
