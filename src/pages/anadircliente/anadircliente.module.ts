import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnadirclientePage } from './anadircliente';


@NgModule({
  declarations: [
    AnadirclientePage,
  ],
  imports: [
    IonicPageModule.forChild(AnadirclientePage),
  ],
})
export class AnadirclientePageModule {}
