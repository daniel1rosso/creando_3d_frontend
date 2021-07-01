import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ProductoComponent } from './component/producto/producto.component';
import { PedidoComponent } from './component/pedido/pedido.component';
import { NuevoClienteComponent } from './component/cliente/nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './component/cliente/editar-cliente/editar-cliente.component';
import { NuevoPedidoComponent } from './component/pedido/nuevo-pedido/nuevo-pedido.component';
import { EditarPedidoComponent } from './component/pedido/editar-pedido/editar-pedido.component';
import { NuevoProductoComponent } from './component/producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './component/producto/editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    ProductoComponent,
    PedidoComponent,
    NuevoClienteComponent,
    EditarClienteComponent,
    NuevoPedidoComponent,
    EditarPedidoComponent,
    NuevoProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
