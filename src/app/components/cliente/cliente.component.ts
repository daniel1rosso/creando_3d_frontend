import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente/cliente.module';
import { ClienteService } from 'src/app/service/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes: any = [];
  p: number = 1;
  collection: any[] = ["asdasd","asdasd","asdasd","asdasd","asdasd","asdasd","asdasd","asdasd"];
  comprobacionTabla = false;
  seccion = "clientes";

  constructor(
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteService.get().subscribe((respuesta) => {
      this.clientes = respuesta;

      if(this.clientes.length<1){
        this.comprobacionTabla = false;
        $("#tabla").css('display','none');
      } else{
        this.comprobacionTabla = true;
      }
      console.log(this.clientes);
    });

  }

}
