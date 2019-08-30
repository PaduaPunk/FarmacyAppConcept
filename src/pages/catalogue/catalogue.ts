import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";
import {PopoverPage} from '../popover/popover';
import {ClientesPage} from '../clientes/clientes';
import {AnadirclientePage} from "../anadircliente/anadircliente";
import {MensajeClienteNitPage} from "../mensaje-cliente-nit/mensaje-cliente-nit";
import {PdfPedidoPage} from "../pdf-pedido/pdf-pedido";
import {RestProvider} from '../../providers/rest/rest';





export interface Config {
  technologies: string;

}

@Component({
  selector: 'page-catalogue',
  templateUrl: 'catalogue.html'
})

export class CataloguePage{

   
   public config : Config;
   public columns : any;
   public rows : any;
   public cliente: any;
   selected = [];
   values;
   index;
   total=0;
   subtotal=0;
   iva=0.16;
   jsonFull;
   categorias;
   public ejemplocliente : any;
   razonSocial="Agregar Cliente";



  constructor(private storage: Storage, public navCtrl: NavController, public popoverCtrl: PopoverController, private _HTTP: HttpClient, public restProvider: RestProvider) {

  this.columns = [
        { name: 'Clave' },
        { name: 'Preciobase'},
        { name: 'Cantidad'},
        { name: 'TotalUnitario'}
      ];

  this.ejemplocliente = [
  {Nit: '123456789', RazonSocial: 'Data Express Latinoamerica'}, {RazonSocial: 'Data Express Latinoamerica'}
  ];


  }

ionViewDidLoad() : void
   {
      this._HTTP
      .get<Config>('https://api.myjson.com/bins/atduk')
      .subscribe((data) =>
      {
         this.rows = data.technologies;
      });

      this._HTTP
      .get<Config>('https://api.myjson.com/bins/ngtls')
      .subscribe((data) =>
      {
         this.cliente = data;
      });
  
         
      //let categorias = this.jsonFull.Categorias;
      
      this.restProvider.getLista(1)
    .then(data => {
      console.log(data);
      this.jsonFull = data;
  });
   }

    onActivate(event) {
    this.values=event.row;
  }

updateValue(event, rowIndex) {
    this.index=rowIndex;
  }

calcTotal()
{
 
}


generarPedido(){
  this.navCtrl.push(PdfPedidoPage, {listaPedido:this.selected, datosClientes:this.ejemplocliente });
}

cargaLista(number){

  this.restProvider.getLista(number)
    .then(data => {
      console.log(data);
      this.jsonFull = data;
  });

}

calcSubtotal()
{
  this.subtotal+=this.subtotal;
}

client(ev){
   let popover = this.popoverCtrl.create(ClientesPage, {key1:this.cliente});
   popover.present({
});

popover.onDidDismiss(data => { 
 console.log("viernes: "+ data); 
 switch(data) { 
   case "nuevoCliente": { 
      console.log("sos nuevo cliete: "+ data);
      let popover = this.popoverCtrl.create(AnadirclientePage, {key1:this.cliente}, { cssClass: 'custom-popover'});
   popover.present({
   });
   popover.onDidDismiss(data => {

try {
    console.log("sos nuevo cliete: "+ data);
    if(data.mensaje){
      console.log("Mariel"); 
      console.log("que aparece : "+ data);
      let popover = this.popoverCtrl.create(MensajeClienteNitPage, {key1:data}, { cssClass: 'custom-popover'});
   popover.present({
   });
      }else{
      this.razonSocial=data;
      }
   }catch(e) {
  console.log(e);
}
}
   );
      break; 
   } 
   case "clienteEncontrado": {
      let popover = this.popoverCtrl.create(MensajeClienteNitPage, {key1:this.cliente}, { cssClass: 'custom-popover'});
   popover.present({
   });
  
      break; 
   }
   default: {
   if(data!=null)
       this.razonSocial=data;
       break;
   } 
} 
});

}

   onSelect({ selected }) {
    let popover = this.popoverCtrl.create(PopoverPage, {key1:this.values});
    popover.present({
    });

      popover.onDidDismiss(data => {

      if(data!=null)
      {            
         this.rows[this.index]['pedido']=data[0].Cantidad;
         this.rows[this.index]['V.Total']=data[0].TotalUnitario;
         this.rows[this.index].cantidad=data[0].Cantidad;
         this.rows[this.index].totalunitario=data[0].TotalUnitario;
         this.subtotal+=data[0].TotalUnitario;
         this.total=this.subtotal+(this.subtotal*this.iva);
      }
      });

  }  
    
  }



