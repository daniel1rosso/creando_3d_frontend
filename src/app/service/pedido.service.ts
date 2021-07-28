import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido/pedido.module';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedido:Pedido[] = [];
  constructor(private _url : UrlService, private _http: HttpClient) { }

  guardarPedido(pedido: any): Observable<any> {

    return this._http.post(this._url.getURLBase() + '/pedido/new_pedido/',pedido );
  }
  get(): Observable<any> {
    return this._http.get<Pedido[]>(this._url.getURLBase() + '/pedido/');
  }

  eliminarPedido(idPedido: number) {
    return this._http.delete(this._url.getURLBase() + '/pedido/' + idPedido);
  }

  getPedido(idPedido: number): Observable<any> {
    return this._http.get<Pedido[]>(this._url.getURLBase() + '/pedido/' + idPedido);
  }
}
