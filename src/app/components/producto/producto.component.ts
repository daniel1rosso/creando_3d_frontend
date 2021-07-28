import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto/producto.module';
import { ProductoService } from 'src/app/service/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: Producto[] = [];
  unidades_stock: number = 0;
  costo_total: number = 0;
  precio_venta: number= 0;
  productos : any;
  num = 0;
  p: number = 1;
  collection: any[] = [];
  comprobacionTabla = false;
  seccion = "producto";

  constructor( private productoService: ProductoService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.calcularTarjetas();
  }

  eliminarProducto(i, data) {
    Swal.fire({
      title: '¿Está seguro que  desea eliminar este producto?',
      icon: 'warning',
      cancelButtonColor: "#929292",
      confirmButtonColor: "#DD6B55",
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).
    then((result) => {
      if (result.isConfirmed) {
          this.productoService.eliminarProducto(data._id).subscribe((respuesta) => {
            this.calcularTarjetas();
          this.productos.splice(i,1);
        });
        this.toastr.success('Eliminado con exito', 'Correcto', {timeOut: 2000, progressBar: true, closeButton: true})
        if(this.productos.length<=1){
          this.comprobacionTabla = false;
          $("#tabla").css('display','none');
        }

      }
    })
  }

  calcularTarjetas(): void{
    this.productoService.get().subscribe((respuesta) => {
      this.productos = respuesta;
      if(this.productos.length<1){

        this.comprobacionTabla = false;
        $("#tabla").css('display','none');

      } else{
        this.comprobacionTabla = true;
      }
      respuesta.forEach(element => {
        this.unidades_stock += parseInt(element.cantidad) ;
        this.costo_total += parseInt(element.costo);
        this.precio_venta += parseInt(element.precio_venta)
      });

    });

  }
  modificarProductoData(data) {
    this.router.navigate(['/modificar-producto/' + data._id]);
  }
}
