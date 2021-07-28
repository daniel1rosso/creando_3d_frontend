import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ProdGuardService} from './guards/prod-guard.service';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'panel', component:DashboardComponent, canActivate : [ProdGuardService] },
  {path: 'productos', component:ProductoComponent, canActivate : [ProdGuardService] },
  {path: 'clientes', component:ClienteComponent, canActivate : [ProdGuardService] },
  {path: 'pedidos', component:PedidoComponent, canActivate : [ProdGuardService] },
  {path: '**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
