export class Producto {
  id:string;
  nombre: string;
  codigo :string;
  cantidad : number;
  despcripcion : string;
  proveedor : string;
  activo :number;
  costo :number;
  cantidad_stock: number;
  precio_venta: number;

  constructor(
    nombre: string,
    codigo :string,
    cantidad : number,
    despcripcion : string,
    proveedor : string,
    activo :number,
    costo :number,
    cantidad_stock: number,
    precio_venta: number){
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.codigo = codigo;
      this.despcripcion = despcripcion;
      this.proveedor = proveedor;
      this.activo=activo;
      this.costo = costo;
      this.cantidad_stock = cantidad_stock;
      this.precio_venta = precio_venta;
    }
}
