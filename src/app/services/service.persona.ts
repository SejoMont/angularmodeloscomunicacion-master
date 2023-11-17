import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// NECESITAMOS DEVOLVER OBJETOS Observable DICHA LIBREIA ESTA DENTRO DE rxjs
import { Observable } from 'rxjs';
import { Global } from '../Global';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServicePersonas {
  // en el constructor debemos recibir el objeto HttpClient
  // para Realizar las peticiones http
  constructor(private _http: HttpClient) {}

  getPersonaPromesa(): Promise<any> {
    var request = 'api/personas';
    var url = environment.urlApiPersonas + request

    let promise = new Promise((resolve) => {
      this._http.get(url).subscribe((response) => {
        resolve(response);
      });
    });
    return promise;
  }

  // Los metodos GET devolveran Observable
  getPersonas(): Observable<any> {
    var request = 'api/personas';
    var url = Global.urlApiPersonas + request
    // Tenemos 2 formas de trabajar con los servicios y sus promesas
    // 1) Igual que en vue, crear una promesa aqui en este metodo y devolver los
    //    datos que extraemos de dicha promesa
    // 2) Devolver directamente la promesa para que el component se suscriba
    return this._http.get(url);
  }
}
