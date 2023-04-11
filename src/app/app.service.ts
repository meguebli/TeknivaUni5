import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from './models/client';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseAPI =""
  constructor(private _http:HttpClient) { }

  getAllClients():Observable<Client[]>{
    return this._http.get<Client[]>(this.baseAPI+"/clients")
  }
  getAllFactures():Observable<Client[]>{
    return this._http.get<Client[]>(this.baseAPI+"/factures")
  }
  getAllarticles():Observable<Client[]>{
    return this._http.get<Client[]>(this.baseAPI+"/articles")
  }
}
