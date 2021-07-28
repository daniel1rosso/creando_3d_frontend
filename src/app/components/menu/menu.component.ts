import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import {faAlignJustify, faShoppingCart, faDollarSign, faUsers, faTruck, faBox, faUser, faSignOutAlt, faCashRegister} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faAlignJustify = faAlignJustify;
  faShoppingCart = faShoppingCart;
  faDollarSign = faDollarSign;
  faUsers = faUsers;
  faTrunk = faTruck;
  faBox = faBox;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faCashRegister = faCashRegister;
  isPermision = false;
  isLogged = false;
  roles : string = "";
  isAdmin = false;
  isUser = false;
  username: String = "";

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.username = this.tokenService.getUserName();

    if(this.roles == 'Administrador' || this.roles == 'SuperAdministrador'){
      this.isPermision = true;

    } else {
      this.isPermision = false;
    }

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

}
