import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()


export class RestProvider {

  apiUrl = 'urldelaapi';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


  getCliente() {
  
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/CatClientes').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

  getLista(noLista)
  {
  let url=this.apiUrl+'/ProductosLista/'+noLista;
   return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }


   getEmpleado(vr) 
  {
  let url=this.apiUrl+'/CatClientes/'+vr;
  console.log("metrika: "+url);
     return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }
	

postCliente(data: any) {
   let headers = new HttpHeaders();
   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  
    return new Promise((resolve, reject) => {
   this.http.post(this.apiUrl+'/CatClientes', data, {headers: headers})
  .subscribe(res => {
    resolve(res);
  }, (err) => {
    reject(err);
  });
})

}

/*

   postCliente(data: any) {
   let headers = new HttpHeaders();
   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  
    return new Promise((resolve, reject) => {
   this.http.post(this.apiUrl+'/CatClientes', data, {headers: headers})
  .subscribe(res => {
    resolve(res);
  }, (err) => {
    reject(err);
  });
})

} */

}