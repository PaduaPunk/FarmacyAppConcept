import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MensajeClienteNitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensaje-cliente-nit',
  templateUrl: 'mensaje-cliente-nit.html',
})
export class MensajeClienteNitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  non;
  mensajes;
  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajeClienteNitPage');
    this.non=this.navParams.get('key1');
    console.log('esto es el mensaje:'+this.non.mensaje);
    this.mensajes=this.non.mensaje;
    if(typeof this.non.mensaje === 'undefined'){
    this.mensajes="Guardado correctamente";
    }
  }

 mensaje(opc) {
   switch(opc) { 
   case 1: { 
      
      break; 
   } 
   case 2: { 
      
      break; 
   } 
   default: { 
     
      break; 
   } 
           } 

 }



}
