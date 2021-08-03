import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { MenuComponent } from './components/menu/menu.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ProductoComponent } from './components/producto/producto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { RolesService } from './service/roles.service';
import {  ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { ProdGuardService } from './guards/prod-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { UrlService } from './service/url.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente/nuevo-cliente.component';
import { ModificarClienteComponent } from './components/cliente/modificar-cliente/modificar-cliente/modificar-cliente.component';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './components/producto/modificar-producto/modificar-producto/modificar-producto.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido/nuevo-pedido.component';
import { ModificarPedidoComponent } from './components/pedido/modificar-pedido/modificar-pedido/modificar-pedido.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario/nuevo-usuario/nuevo-usuario.component';
import { ModificarUsuarioComponent } from './components/usuario/modificar-usuario/modificar-usuario/modificar-usuario.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    MenuComponent,
    PedidoComponent,
    ProductoComponent,
    UsuarioComponent,
    NuevoClienteComponent,
    ModificarClienteComponent,
    NuevoProductoComponent,
    ModificarProductoComponent,
    NuevoPedidoComponent,
    ModificarPedidoComponent,
    NuevoUsuarioComponent,
    ModificarUsuarioComponent
  ],
  imports: [

    BrowserModule,
	  ReactiveFormsModule,
	  HttpClientModule,
	  AppRoutingModule,

    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    FilterPipeModule

  ],
  providers: [  
	  { provide: HTTP_INTERCEPTORS, useClass : ProdInterceptorService, multi : true}
  ,ProdGuardService, RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

