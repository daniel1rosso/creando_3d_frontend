import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ProdGuardService} from './guards/prod-guard.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoProductoComponent } from './components/producto/nuevo-producto/nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './components/producto/modificar-producto/modificar-producto/modificar-producto.component';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente/nuevo-cliente.component';
import { ModificarClienteComponent } from './components/cliente/modificar-cliente/modificar-cliente/modificar-cliente.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido/nuevo-pedido.component';
import { ModificarPedidoComponent } from './components/pedido/modificar-pedido/modificar-pedido/modificar-pedido.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario/nuevo-usuario/nuevo-usuario.component';
import { ModificarUsuarioComponent } from './components/usuario/modificar-usuario/modificar-usuario/modificar-usuario.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'panel', component:DashboardComponent},
  {path: 'productos', component:ProductoComponent},
  {path: 'nuevo-producto', component:NuevoProductoComponent},
  {path: 'modificar-producto', component:ModificarProductoComponent},
  {path: 'clientes', component:ClienteComponent},
  {path: 'nuevo-cliente', component:NuevoClienteComponent},
  {path: 'modificar-cliente', component:ModificarClienteComponent},
  {path: 'pedidos', component:PedidoComponent },
  {path: 'nuevo-pedido', component:NuevoPedidoComponent },
  {path: 'modificar-pedido', component:ModificarPedidoComponent },
  {path: 'usuarios', component:UsuarioComponent },
  {path: 'nuevo-usuario', component:NuevoUsuarioComponent },
  {path: 'modificar-usuario', component:ModificarUsuarioComponent },
  {path: '**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
