import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { getLocaleId } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class RolesService {

  private roles: Rol[] = [];
  constructor(private _http: HttpClient, private _url: UrlService) { }



  get(): Observable<any> {
    return this._http.get<any[]>(this._url.getURLBase() + '/rol/');
  }
}
  

export interface Rol {
  _id: number;
  nombre: string;
}