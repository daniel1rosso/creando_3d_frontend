import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto/producto.module';
import { UrlService } from './url.service';
import { environment } from 'src/environments/environment';

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
    return this._http.get<Producto[]>(environment.url+ '/producto/' + idProducto);
  }

  get(): Observable<any> {
    return this._http.get<any>(environment.url + 'producto');
  }

  guardarProducto(producto: any): Observable<any> {

    return this._http.post(environment.url + '/producto/new_producto',producto );
  }

  eliminarProducto(idProducto: number) {
    return this._http.delete(environment.url + '/producto/' + idProducto);
  }

  modificarProducto(producto: any, idProducto: number): Observable<any> {
    return this._http.put<any>(environment.url+ '/producto/' + idProducto, producto);
  }

  notificaciones(): Observable<any> {
    return this._http.post(environment.url + '/producto/productos_faltantes', "" );
  }
}
