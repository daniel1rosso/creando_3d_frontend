import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PedidoService } from 'src/app/service/pedido.service';
import Swal from 'sweetalert2';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PedidoComponent implements OnInit {
  pedido:any[] = [];
  _pedido:any = {}
  detallepedido:any[] = [];
  p: number = 1;
  collection: any[] = [];

  comprobacionTabla = false;
  seccion = "pedidos";
  codigo;
  constructor(
    private pedidosService: PedidoService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.pedidosService.get().subscribe((respuesta) => {
      this.pedido = respuesta;
      console.log(this.pedido);

      if(this.pedido.length<1){

        this.comprobacionTabla = false;
        $("#tabla").css('display','none');

      } else{
        this.comprobacionTabla = true;
      }
    });

  }

  verVenta(data){

    this.router.navigate(['/ver-pedido/' + data._id]);

  }

  eliminarPedido(i,data) {
    Swal.fire({
      title: '¿Está seguro que  desea eliminar este pedido?',
      icon: 'warning',
      cancelButtonColor: "#929292",
      confirmButtonColor: "#DD6B55",
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).
    then((result) => {
      if (result.isConfirmed) {
          this.pedidosService.eliminarPedido(data._id).subscribe((respuesta) => {
          this.pedido.splice(i,1);
        });
        this.toastr.success('Eliminado con exito', 'Correcto', {timeOut: 2000, progressBar: true, closeButton: true})
        if(this.pedido.length<=1){
          this.comprobacionTabla = false;
          $("#tabla").css('display','none');
        }
      }
    })

  }
}
