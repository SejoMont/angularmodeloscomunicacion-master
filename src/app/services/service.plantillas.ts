import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// NECESITAMOS DEVOLVER OBJETOS Observable DICHA LIBREIA ESTA DENTRO DE rxjs
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServicePlantillas {
  constructor(private _http: HttpClient) {}

  getFunciones(): Observable<any> {
    var request = 'api/plantilla/funciones';
    var url = environment.urlApiPlantilla + request;

    return this._http.get(url);
  }

  getPlantilla(funcion: string): Observable<any> {
    var request = 'api/plantilla/plantillafuncion/' + funcion;
    var url = environment.urlApiPlantilla + request;

    return this._http.get(url);
  }

  getPlantillaFunciones(funciones: Array<string>): Observable<any> {
    // /api/Plantilla/PlantillaFunciones?funcion=ENFERMERA&funcion=ENFERMERO&funcion=INTERINO
    var data = '';

    for (var funcion of funciones) {
      data += 'funcion=' + funcion + '&';
    }

    data = data.substring(0, data.length - 1);
    var request = 'api/plantlla/plantillafunciones?' + data;
    var url = environment.urlApiPlantilla + request;

    return this._http.get(url);
  }
}
