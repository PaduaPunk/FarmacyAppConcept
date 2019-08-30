import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfPedidoPage } from './pdf-pedido';

@NgModule({
  declarations: [
    PdfPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfPedidoPage),
  ],
})
export class PdfPedidoPageModule {}
