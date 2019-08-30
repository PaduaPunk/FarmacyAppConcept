import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
   export class PopoverPage {
   items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    console.log("señormarrano:"+this.navParams.get('key1'));
  }

  total_suma = 0;
  cantidad = 0;
  productos = this.navParams.get('key1');
  descripcionProducto = this.productos.Clave+" "+this.productos.Producto+" "+this.productos.Presentacion;
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }


  calcTotalProducto(valor){
    this.cantidad = valor;
    let producto = this.navParams.get('key1');
    let preciobase = producto.preciobase;
    this.total_suma = valor*preciobase;
  }


  dismiss() {
  if(this.cantidad>0){
  var precio = [{
    "Cantidad": this.cantidad,
    "TotalUnitario": this.total_suma
  }];
    this.viewCtrl.dismiss(precio);
  }else{
  }
  }
}
