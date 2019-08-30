import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { PopoverController, ViewController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  
  public cliente;
  public razonsocial="hola"; 
  public ejemploCliente;
  public clienteJSON;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public viewCtrl : ViewController,  public restProvider: RestProvider, public loadingController: LoadingController) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad ClientesPage');
  }

  crearclient(event){
  this.viewCtrl.dismiss("nuevoCliente").catch(() => {});;
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }


  clienteencontrado(){
  try{
  this.viewCtrl.dismiss(this.ejemploCliente[0].RazonSocial).catch(() => {});
  }catch(e){

  }
  }

   getCliente()
   {
   this.restProvider.getEmpleado(905000001)
    .then(data => {
      console.log(data);
    });
   }

    validateCliente(input){
    let loader = this.loadingController.create({
      content: "Buscando NIT: "+ input
    });  
   
    console.log("tamaño input"+input.length);
    if(input.length>8)
    {
    loader.present();
    this.restProvider.getEmpleado(input)
    .then(data => {
      console.log(data);
    loader.dismiss();
   
     
    if(this.isEmpty(data)==false){
    this.ejemploCliente=data; 
     let cliente=this.navParams.get('key1');
     this.clienteencontrado();
     console.log('cliente encontrado:'+this.ejemploCliente[0].RazonSocial);
                                           
  console.log("NIT:"+cliente.Nit);
  console.log("INPUT:"+input);
  if(input==cliente.Nit){
  console.log("razon social"+cliente.RazonSocial);
  this.razonsocial=cliente.RazonSocial;
  }else{
  this.razonsocial="";
  }
  
    }else{

    }


     });
    }
   }




}
