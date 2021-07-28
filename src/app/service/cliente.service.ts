import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente/cliente.module';
import { TokenService } from './token.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes:Cliente[] = [];
  private authToken;
  constructor(private _http: HttpClient, private _url: UrlService, private tokenService : TokenService) { }

  getClientes(): Cliente[] {
    return this.clientes;
  }

  getCliente(idCliente: number): Observable<any> {
    return this._http.get<Cliente[]>(this._url.getURLBase() + '/cliente/' + idCliente);
  }

  get(): Observable<any> {
    return this._http.get<Cliente[]>(this._url.getURLBase() + '/cliente/');
  }

  guardarCliente(cliente: any): Observable<any> {

    return this._http.post(this._url.getURLBase() + '/cliente/new_cliente',cliente );
  }

  eliminarCliente(idCliente: number) {
    return this._http.delete(this._url.getURLBase() + '/cliente/' + idCliente);
  }

  modificarCliente(cliente: any, idCliente: number): Observable<any> {

    return this._http.put<any>(this._url.getURLBase() + '/cliente/' + idCliente, cliente);
  }

}
