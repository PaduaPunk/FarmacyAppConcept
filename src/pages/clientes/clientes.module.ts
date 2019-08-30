import { NgModule } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { IonicPageModule } from 'ionic-angular';
import { ClientesPage } from './clientes';

@NgModule({
  declarations: [
    ClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientesPage),
  ],
})
export class ClientesPageModule {}
