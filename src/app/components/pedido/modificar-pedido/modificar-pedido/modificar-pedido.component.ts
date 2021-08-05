import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente/cliente.module';
import { Estado } from 'src/app/models/estado/estado.module';
import { Pedido } from 'src/app/models/pedido/pedido.module';
import { Producto } from 'src/app/models/producto/producto.module';
import { ClienteService } from 'src/app/service/cliente.service';
import { ColorService } from 'src/app/service/color.service';
import { EstadoService } from 'src/app/service/estado.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-modificar-pedido',
  templateUrl: './modificar-pedido.component.html',
  styleUrls: ['./modificar-pedido.component.css']
})
export class ModificarPedidoComponent implements OnInit {
  color: any;
  id: any;

  constructor( private clientesService: ClienteService,
    private estadosService: EstadoService,
    private productosService: ProductoService,
    private coloresService: ColorService,
    private pedidosService: PedidoService,
    private router: Router,
    private toastr: ToastrService, private _activate : ActivatedRoute) { 
      this._activate.params.subscribe((parametros) => {
      
        this.pedidosService.getPedido(parametros['_id']).subscribe((respuesta) => {
            this.producto = respuesta;
            console.log("--")
            this.id =this.pedido.id
            console.log(this.producto)
          });
      });
    }
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
    
    fecha_entrega: Date;
    precio: Number = 0;
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
   
  }

  calculoTotal(): void {
    console.log(this.pedido_)
   
    console.log(parseFloat(this.pedido_.producto.precio_estimativo) * this.pedido_.cantidad)
    //$("#precio").val(parseFloat(this.pedido_.producto.precio) * this.pedido_.cantidad);
    this.pedido_.precio= (parseFloat(this.pedido_.producto.precio_estimativo) * this.pedido_.cantidad);
    
  }

  onEdit(data):void {
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
      this.pedido.id = this.id
      this.pedidosService.modificarPedido(this.pedido,this.id).subscribe((data) => {
        this.toastr.success('Pedido ' +' guardado correctamente.','Correcto', {closeButton: true});
      });

      this.router.navigate(['/pedidos']);
    }else{
      this.toastr.error('Por favor, revise los campos obligatorios ','Error');
    }
  }
}
