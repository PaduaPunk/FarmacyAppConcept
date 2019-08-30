import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajeClienteNitPage } from './mensaje-cliente-nit';

@NgModule({
  declarations: [
    MensajeClienteNitPage,
  ],
  imports: [
    IonicPageModule.forChild(MensajeClienteNitPage),
  ],
})
export class MensajeClienteNitPageModule {}
