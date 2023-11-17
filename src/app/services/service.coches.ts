import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// NECESITAMOS DEVOLVER OBJETOS Observable DICHA LIBREIA ESTA DENTRO DE rxjs
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServiceCoches {
  constructor(private _http: HttpClient) {}

  getCoches(): Observable<any> {
    var request = 'webresources/coches';
    var url = environment.urlApiCoches + request

    return this._http.get(url);
  }
}
