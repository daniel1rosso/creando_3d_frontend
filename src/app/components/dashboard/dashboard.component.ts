import { Component, NgModule, OnInit } from '@angular/core';
import { formatDate} from '@angular/common'
import { faSun, faMoon, faUserCheck, faBox, faUsers, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faSaludo = faSun;
  faBox = faBox;
  faUsers = faUsers;
  faTrunk = faTruck;
  faUser = faUser;
  faUserCheck = faUserCheck;
  saludo: any = [];
  saludo_:any = {}
  today = Date.now();
  roles: string = "";
  name: string = "";
  username: string = "";
  date = "";

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.date = formatDate(this.today, 'HH:MM', 'en-ES', 'UTC−0300');
    this.saludo_ = this.saludo_;
    this.saludo.push(this.saludar());


    this.roles = "Administrador"
    this.username = this.tokenService.getUserName()
    this.name = this.tokenService.getName()
  }

  saludar(){
    if (this.date <= '12:00' && this.date >= '06:00'){
      this.saludo_="Buenos Días";
      this.faSaludo = faSun;
    }else if ( this.date >'12:00' && this.date<= '20:00'){
      this.saludo_="Buenas Tardes";
      this.faSaludo = faSun;
    }else{
      this.saludo_ = "Buenas Noches";
      this.faSaludo = faMoon;
    }
    return this.saludo_;
  }

}
