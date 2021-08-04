import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto/producto.module';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  producto : Producto
  alto : Number
  ancho :Number
  largo :Number
  costo : Number
  gramos : Number
  nombre : String
  precio_estimativo : Number
  tiempo : String

  constructor(private productoService :ProductoService, private toastr : ToastrService, private router :Router) {}

  ngOnInit(): void {}

  onSave(data){
    if (!data.valid){
      this.alto = data.alto;
      this.ancho = data.ancho;
      this.largo = data.largo;
      this.gramos = data.gramos
      this.costo = data.costo;
      this.nombre = data.nombre
      this.precio_estimativo = data.precio_estimativo
      this.tiempo = data.tiempo;

      this.producto = new Producto(this.alto,this.ancho,this.costo,this.gramos,this.nombre,this.precio_estimativo, this.tiempo);
      this.productoService.guardarProducto(this.producto).subscribe((data) => {
        this.toastr.success('Producto '+ data.nombre +' guardado correctamente.','Correcto', {closeButton: true});
      });

      this.router.navigate(['/productos']);
    }else{
      this.toastr.error('Por favor, revise los campos obligatorios ','Error');
    }
  }
}
