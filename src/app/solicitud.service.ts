import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(public _http:HttpClient) { }

  //private httpUrl='https://restcountries.eu/rest/v2/all';

  private httpUrl='http://localhost:3000/';

 getAllPais():Observable<any>{
    //console.log(this._http.get(this.httpUrl));
    return this._http.get(this.httpUrl);
 }
}
