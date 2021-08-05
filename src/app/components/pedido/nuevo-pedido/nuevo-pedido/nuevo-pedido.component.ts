import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente/cliente.module';
import { Color } from 'src/app/models/color/color.module';
import { Estado } from 'src/app/models/estado/estado.module';
import { Pedido } from 'src/app/models/pedido/pedido.module';
import { Producto } from 'src/app/models/producto/producto.module';
import { ClienteService } from 'src/app/service/cliente.service';
import { ColorService } from 'src/app/service/color.service';
import { EstadoService } from 'src/app/service/estado.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {
  clientes:any = {};
  estados:any = {};
  productos:any = {};
  colores:any = {};
  pedido:any = {};
  pedido_:any = {};
  cliente: Cliente;
  producto: Producto;
  estado: Estado;
  cantidad: Number;
  color: Color;
  fecha_entrega: Date;
  precio: Number = 0;

  constructor(
    private clientesService: ClienteService,
    private estadosService: EstadoService,
    private productosService: ProductoService,
    private coloresService: ColorService,
    private pedidosService: PedidoService,
    private router: Router,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.clientesService.get().subscribe((respuesta) => {
      this.clientes = respuesta;
    });
    this.estadosService.get().subscribe((respuesta) => {
      this.estados = respuesta;
    });
    this.productosService.get().subscribe((respuesta) => {
      this.productos = respuesta;
    });
    this.coloresService.get().subscribe((respuesta) => {
      this.colores = respuesta;
    });
  }

  calculoTotal(): void {
    console.log(parseFloat(this.pedido_.producto.precio_estimativo) * this.pedido_.cantidad)
    this.pedido_.precio= (parseFloat(this.pedido_.producto.precio_estimativo) * this.pedido_.cantidad);

  }

  onSave(data):void {
    if (!data.valid){
      console.log(data)
      this.cliente = data.cliente;
      this.producto = data.producto;
      this.estado = data.estado;
      this.cantidad = data.cantidad
      this.color = data.color;
      this.fecha_entrega = data.fecha_entrega
      this.precio = data.precio

      this.pedido = new Pedido(this.cliente, this.producto, this.estado, this.cantidad, this.color, this.fecha_entrega, this.precio);
      this.pedidosService.guardarPedido(this.pedido).subscribe((data) => {
        this.toastr.success('Pedido ' +' guardado correctamente.','Correcto', {closeButton: true});
      });

      this.router.navigate(['/pedidos']);
    }else{
      this.toastr.error('Por favor, revise los campos obligatorios ','Error');
    }
  }
}
