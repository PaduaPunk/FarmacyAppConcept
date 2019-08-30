import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonosPage } from './bonos';

@NgModule({
  declarations: [
    BonosPage,
  ],
  imports: [
    IonicPageModule.forChild(BonosPage),
  ],
})
export class BonosPageModule {}
