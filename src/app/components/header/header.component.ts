import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { faBars, faCaretLeft, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  faBell = faBell
  faCaretLeft = faCaretLeft;

  constructor() { }

  ngOnInit(): void {
  }

  acomodarBoton(){
    if('#sidebar == active'){
      $('#sidebar, #content').toggleClass('active');
      $('#sidebarCollapse').removeClass('activo');
    } else{
      $('#sidebar, #content').removeClass('active');
    }

    $('#sidebarCollapse').addClass('activo');

  }
}
