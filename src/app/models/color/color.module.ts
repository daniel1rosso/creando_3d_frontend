import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Color {
  nombre: String;

  constructor(nombre:String ){
    this.nombre = nombre
  }
}
