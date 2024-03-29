import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../service/token.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ProdGuardService implements CanActivate {
  realRol: string = "";

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    const rol = this.tokenService.getAuthorities();
    if (rol){
      return true
    }else {
      this.router.navigate(['/']);
      return false;
    }


  }

}
