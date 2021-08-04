import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../models/estado/estado.module';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private estado:Estado[] = [];

  constructor(private _http: HttpClient, private _url: UrlService) { }

  get(): Observable<any> {
    return this._http.get<Estado[]>(this._url.getURLBase() + '/estado/');
  }
}
