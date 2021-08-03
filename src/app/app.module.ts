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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { RolesService } from './service/roles.service';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { ProdGuardService } from './guards/prod-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './components/producto/modificar-producto/modificar-producto/modificar-producto.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido/nuevo-pedido.component';
import { ModificarPedidoComponent } from './components/pedido/modificar-pedido/modificar-pedido/modificar-pedido.component';
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
    NuevoProductoComponent,
    ModificarProductoComponent,
    NuevoPedidoComponent,
    ModificarPedidoComponent
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
