import { Cliente} from 'src/app/models/cliente/cliente.module'
import { Producto } from '../producto/producto.module';
import { Estado } from '../estado/estado.module';
import { Color } from '../color/color.module';

export class Pedido {
  cliente: Cliente;
  producto: Producto;
  estado: Estado;
  cantidad: Number;
  color: Color;
  fecha_entrega: Date;
  precio: Number;

  constructor(cliente : Cliente, producto : Producto, estado : Estado, cantidad : Number, color : Color, fecha_entrega : Date, precio:Number ){
    this.cliente = cliente
    this.producto = producto
    this.estado = estado
    this.cantidad = cantidad
    this.color = color
    this.fecha_entrega = fecha_entrega
    this.precio = precio
  }
}
