import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto/producto.module';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private producto:Producto[] = [];

  constructor(private _http: HttpClient, private _url: UrlService) { }


  getProductos(): Producto[] {
    return this.producto;
  }

  getProducto(idProducto: number): Observable<any> {
    return this._http.get<Producto[]>(this._url.getURLBase() + '/producto/' + idProducto);
  }

  get(): Observable<any> {
    return this._http.get<Producto[]>(this._url.getURLBase() + '/producto/');
  }

  guardarProducto(producto: any): Observable<any> {

    return this._http.post(this._url.getURLBase() + '/producto/new_producto',producto );
  }

  eliminarProducto(idProducto: number) {
    return this._http.delete(this._url.getURLBase() + '/producto/' + idProducto);
  }

  modificarProducto(producto: any, idProducto: number): Observable<any> {
    return this._http.put<any>(this._url.getURLBase() + '/producto/' + idProducto, producto);
  }

  notificaciones(): Observable<any> {
    return this._http.post(this._url.getURLBase() + '/producto/productos_faltantes', "" );
  }
}
