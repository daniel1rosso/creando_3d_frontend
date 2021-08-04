export class Cliente {
  id:Number;
  nombre: string;
  apellido: string;
  contacto: string

  constructor(
    id:Number,
    nombre: string,
    apellido: string,
    contacto: string
    ){
      this.id = id, this.apellido = apellido, this.nombre = nombre, this.contacto = contacto
    }
}
