import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/models/producto/producto.module';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
  producto:any = {};
  private id;
  alto : Number
  ancho :Number
  largo :Number
  costo : Number
  gramos : Number
  nombre : String
  precio_estimativo : Number
  tiempo : String

  constructor(private productoService :ProductoService, private toastr : ToastrService, private router :Router, private _activate : ActivatedRoute) {
    this._activate.params.subscribe((parametros) => {
      this.id = parametros['_id'];
      this.productoService.getProducto(parametros['_id']).subscribe((respuesta) => {
          this.producto = respuesta;
          console.log("--")
          console.log(this.producto)
        });
    });
  }

  ngOnInit(): void {}

  onEdit(data){
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
      this.productoService.modificarProducto(this.producto, this.id).subscribe((data) => {
       this.toastr.success('Producto '+ data.nombre +' modificado correctamente.','Correcto', {closeButton: true});
     });

     this.router.navigate(['/productos']);
    }else{
      this.toastr.error('Por favor, revise los campos obligatorios ','Error');
    }
  }
}
