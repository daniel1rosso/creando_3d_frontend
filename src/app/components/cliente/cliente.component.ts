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
  clientes: Cliente[] = [];
  p: number = 1;
  collection: any[] = ["asdasd","asdasd","asdasd","asdasd","asdasd","asdasd","asdasd","asdasd"];
  comprobacionTabla = false;
  seccion = "clientes";

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private toastr: ToastrService
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

  modificarClienteData(data) {
    this.router.navigate(['/modificar-cliente/' + data._id]);
  }

  eliminarCliente(i, data) {
    Swal.fire({
      title: '¿Está seguro que  desea eliminar este cliente?',
      icon: 'warning',
      cancelButtonColor: "#929292",
      confirmButtonColor: "#DD6B55",
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).
    then((result) => {
      if (result.isConfirmed) {
          this.clienteService.eliminarCliente(data._id).subscribe((respuesta) => {
          this.clientes.splice(i,1);
        });
        this.toastr.success('Eliminado con exito', 'Correcto', {timeOut: 2000, progressBar: true});
        if(this.clientes.length<=1){
          this.comprobacionTabla = false;
          $("#tabla").css('display','none');
        }
      }
    })

  }


}
