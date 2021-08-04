import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ProdGuardService} from './guards/prod-guard.service';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './components/producto/modificar-producto/modificar-producto/modificar-producto.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido/nuevo-pedido.component';
import { ModificarPedidoComponent } from './components/pedido/modificar-pedido/modificar-pedido/modificar-pedido.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'panel', component:DashboardComponent},
  {path: 'productos', component:ProductoComponent},
  {path: 'nuevo-producto', component:NuevoProductoComponent},
  {path: 'modificar-producto/:_id', component:ModificarProductoComponent},
  {path: 'clientes', component:ClienteComponent},
  {path: 'pedidos', component:PedidoComponent },
  {path: 'nuevo-pedido', component:NuevoPedidoComponent },
  {path: 'modificar-pedido/:_id', component:ModificarPedidoComponent },
  {path: '**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
