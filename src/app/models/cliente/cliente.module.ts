export class Cliente {
  id:string;
  nombre: string;
  apellido: string;
  telefono: number;
  email: string;
  direccion: string;
  nro_piso: string;
  depto: string;
  localidad: number;
  provincia: number;
  dni: number;
  activo : number;
  constructor( nombre: string,
      apellido: string,
      telefono: number,
      email: string,
      direccion: string,
      nro_piso: string,
      depto: string,
      localidad: number,
      provincia,
      dni: number,
      activo: number){
          this.nombre = nombre;
          this.apellido = apellido;
          this.email = email;
          this.telefono = telefono;
          this.provincia = provincia;
          this.localidad = localidad;
          this.direccion = direccion;
          this.nro_piso = nro_piso;
          this.depto = depto;
          this.dni = dni;
          this.activo=activo;

  }
}
