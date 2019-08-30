import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {MensajeClienteNitPage} from "../mensaje-cliente-nit/mensaje-cliente-nit";




/**
 * Generated class for the AñadirclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadircliente',
  templateUrl: 'anadircliente.html',
})
export class AnadirclientePage {

  users: any;
  privateoptions;


  data =  {
  Nit: "",
  RazonSocial: "",
  TipoProveedor: "",
  CorreoElectronico: "",
  Departamento: "",
  Direccion: "",
  Zona: "",
  Municipio: "",
  Ciudad: "",
  Estatus: true,
  conectado: true,
  intentos: 0,
  UserCliente: "",
  ClaveCliente: "",
  Telefono: ""
};


  returned = {
  mensaje:"",
  Valor:" "
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public viewCtrl : ViewController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AñadirclientePage');
  }


  postclient(){
  let data =  {
  "Nit": this.data.Nit,
  "RazonSocial": this.data.RazonSocial,
  "TipoProveedor": this.data.TipoProveedor,
  "CorreoElectronico": this.data.CorreoElectronico,
  "Departamento": this.data.Departamento,
  "Direccion": this.data.Direccion,
  "Zona": this.data.Zona,
  "Municipio": this.data.Municipio,
  "Ciudad": this.data.Ciudad,
  "Estatus": true,
  "conectado": true,
  "intentos": 0,
  "UserCliente": this.data.Nit,
  "ClaveCliente": this.data.Nit,
  "Telefono": this.data.Telefono
  };

  console.log("json" + JSON.stringify(data));
  this.restProvider.postCliente(JSON.stringify(data)).then((result) => {
    console.log(result);
    console.log(result[0]);
    

    this.returned.mensaje="Guardado Correctamente";
    this.returned.Valor=this.data.Nit;

    // si es diferente de undefinded quiere decir que 
    // ya se encuentra registrado ese NIT
    if(typeof result[0] === 'undefined'){
    this.viewCtrl.dismiss(this.returned).catch(() => {});;
    
    }else{

    this.returned.mensaje=JSON.stringify(result);
    this.returned.Valor=this.data.Nit;
    let popover = this.popoverCtrl.create(MensajeClienteNitPage, {key1:this.returned}, { cssClass: 'custom-popover'});
   popover.present({
   });

   // this.returned.Valor=this.data.Nit;
    }
    
    console.log("mensaje:"+this.returned.mensaje);
    console.log("valor:"+this.returned.Valor);
  }, (err) => {
    console.log(err);
  });



  
}

validateNit(val){
  this.data.Nit=val;
}

validateRazonSocial(val){
  this.data.RazonSocial=val;
}

validateTipoProveedor(val){
  this.data.TipoProveedor=val;
}

validateCorreoElectronico(val){
  this.data.CorreoElectronico=val;
}

validateDepartamento(val){
  this.data.Departamento=val;
}

validateDireccion(val){
  this.data.Direccion=val;
}

validateZona(val){
  this.data.Zona=val;
}

validateMunicipio(val){
  this.data.Municipio=val;
}

validateCiudad(val){
  this.data.Ciudad=val;
}

validateTelefono(val){
  this.data.Telefono=val;
}

getCliente(){
	 this.restProvider.getCliente()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
}
}
