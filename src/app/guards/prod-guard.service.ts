import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AutenticacionService } from '../service/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class ProdGuardService implements CanActivate {
  constructor(private servicioAutenticacion: AutenticacionService,
		private router : Router) { }
	path: ActivatedRouteSnapshot[];
	route: ActivatedRouteSnapshot;

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let usuarioLogueado = this.servicioAutenticacion.usuarioLogueado;
		if (usuarioLogueado && usuarioLogueado.authenticated) {
			return true;
		}
		//obligamos a ir al login
		this.router.navigate(['login']);
		return false;
	}

}
