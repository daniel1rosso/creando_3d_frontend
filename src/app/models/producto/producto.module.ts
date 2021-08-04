export class Producto {
  alto : Number
  ancho :Number
  costo : Number
  gramos : Number
  nombre : String
  precio_estimativo : Number
  tiempo : String

  constructor(
    alto : Number,
    ancho :Number,
    costo : Number,
    gramos : Number,
    nombre : String,
    precio_estimativo : Number,
    tiempo : String
    ){
      this.alto = alto, this.ancho = ancho, this.costo = costo, this.gramos = gramos, this.nombre = nombre, this.precio_estimativo = precio_estimativo, this.tiempo = tiempo
    }
}
