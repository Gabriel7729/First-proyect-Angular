import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Diferentes variables utilizadas a lo largo del proyecto de Angular
  title = 'Angular Proyect';
  EscribaAlgo = 'Escriba algo aquí...';
  desabilitado = true;
  num = '3';
  textInput = 'Este input estará habilitado en ';
  text1 = '';
  text2 = '';
  textoIndefinido1 = '';
  textoIndefinido2 = '';
  MostrarEstudiantes = false;
  //Lista de estudiantes, que sirve para usar el *ngFor en una Tabla o Lista
  ListaEstudiantes: any[] = [
    {Nombre: 'Gabriel', Apellido: 'De La Rosa', NotaFinal: 85},
    {Nombre: 'Ronald', Apellido: 'Ortiz', NotaFinal: 77},
    {Nombre: 'Darlyn', Apellido: 'Pujols', NotaFinal: 95}
  ]

  //Metodo Constructor, que se inicia, cuando corre la aplicacion
  constructor(){
    setInterval(()=> this.desabilitado = false, 3000)
    //Cosigo que sirver para la cuenta regresiva
    setTimeout(()=> this.num = '2', 1000)
    setTimeout(()=> this.num = '1', 2000)
    setTimeout(()=> this.num = '', 3000)
    setTimeout(()=> this.textInput = '', 3000)
  }

  Mostrar(): void{
    this.MostrarEstudiantes = !this.MostrarEstudiantes;
  }

  //Metodo de tipo Void, para intercambiar los textos de dos variables de tipo string
  IntercambiarTextos(): void{
    this.textoIndefinido1 = this.text1;
    this.textoIndefinido2 = this.text2;
    if (this.textoIndefinido1 == '' && this.textoIndefinido2 == ''){
      this.text1 = this.textoIndefinido2;
      this.text2 = this.textoIndefinido1;
    }else{
      if(this.text2 == this.textoIndefinido1 && this.text1 == this.textoIndefinido2){
        this.text2 = this.textoIndefinido2;
        this.text1 = this.textoIndefinido1;
      }else{
        this.text1 = this.textoIndefinido2;
        this.text2 = this.textoIndefinido1;
      }

    }
  }

  //Funcion que se encarga de sumar dos numeros, que se reciben por parámetros
  GetSuma(num1: number, num2: number){
    return num1 + num2;
  }

  //Funcion que se encarga de restar dos numeros, que se reciben por parámetros
  GetResta(num1: number, num2: number){
    return num1 - num2;
  }
}
