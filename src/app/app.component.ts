import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Proyect';
  EscribaAlgo = 'Escriba algo aquí...';
  desabilitado = true;
  CuentaAtras3 = '3';
  num = 3;


  constructor(){
    setInterval(()=> this.desabilitado = false, 3000)
    setInterval(()=> {this.CuentaAtras3 = '2', 1000})
  }

  GetSuma(num1: number, num2: number){
    return num1 + num2;
  }

  GetResta(num1: number, num2: number){
    return num1 - num2;
  }
}
