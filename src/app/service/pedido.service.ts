import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido/pedido.module';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedido:Pedido[] = [];
  constructor(private _url : UrlService, private _http: HttpClient) { }

  guardarPedido(pedido: Pedido): Observable<any> {
    return this._http.post(environment.url + 'pedido/guardar',pedido );
  }

  get(): Observable<any> {
    return this._http.get<any>(environment.url + 'pedido');
  }

  eliminarPedido(idPedido: number) {
    return this._http.delete(environment.url+ 'pedido/' + idPedido);
  }

  getPedido(idPedido: number): Observable<any> {
    return this._http.get<any>(environment.url + 'pedido/' + idPedido);
  }
}
