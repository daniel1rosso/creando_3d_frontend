import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color/color.module';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private color:Color[] = [];

  constructor(private _http: HttpClient, private _url: UrlService) { }

  get(): Observable<any> {
    return this._http.get<Color[]>(this._url.getURLBase() + '/color/');
  }
}
