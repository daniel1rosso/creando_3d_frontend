
export class Usuario {
  username: string;
  nombre: string;
  apellido: string;
  email:string;
  provincia: number;
  comuna:number;
password: string;
telefono : number
constructor(
  username: string,
  nombre: string,
  apellido: string,
  email:string,
  provincia: number,
  comuna:number,
password: string,
telefono : number

  ){
    this.username= username,this.nombre = nombre,this.apellido = apellido,this.email = email,this.provincia = provincia,this.comuna = comuna ,this.password = password,this.telefono = telefono
    
  }


}
