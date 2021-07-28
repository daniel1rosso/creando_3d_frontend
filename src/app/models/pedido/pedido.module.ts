import { Cliente} from 'src/app/models/cliente/cliente.module'

export class Pedido {
  cliente: Cliente;
  total: number;
  precio: number;
  descuento: number;
  fecha: Date;
  activo: number;

  constructor(cliente : Cliente, total : number, precio : number, descuento : number, fecha : Date, activo:number ){
    this.cliente = cliente
    this.precio = precio
    this.descuento = descuento
    this.total = total
    this.fecha = fecha
    this.activo = activo
  }
}
