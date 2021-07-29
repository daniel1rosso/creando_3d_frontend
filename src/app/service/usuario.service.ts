import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { UrlService } from './url.service';
import {Usuario} from '../models/usuario/usuario'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios:Usuario[] = [];
  constructor(private _http: HttpClient, private _url: UrlService, private tokenService : TokenService) { }

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  getUsuario(idCUsuario: number): Observable<any> {
    return this._http.get<Usuario[]>(this._url.getURLBase() + '/usuario/' + idCUsuario);
  }

  get(): Observable<any> {
    return this._http.get<Usuario[]>(this._url.getURLBase() + '/usuario/');
  }

  guardarUsuario(usuario: any): Observable<any> {
    
    return this._http.post(this._url.getURLBase() + '/usuario/signup',usuario);
  }

  eliminarUsuario(idUsuario: number) {
    return this._http.delete(this._url.getURLBase() + '/usuario/' + idUsuario);
  }

  modificarUsuario(usuario: any, idUsuario: number): Observable<any> {
    
    return this._http.put<any>(this._url.getURLBase() + '/usuario/' + idUsuario, usuario);
  }

}
