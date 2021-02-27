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
  num = '3';
  textInput = 'Este input estará habilitado en ';

  constructor(){
    setInterval(()=> this.desabilitado = false, 3000)
    setTimeout(()=> this.num = '2', 1000)
    setTimeout(()=> this.num = '1', 2000)
    setTimeout(()=> this.num = '', 3000)
    setTimeout(()=> this.textInput = '', 3000)
  }

  GetSuma(num1: number, num2: number){
    return num1 + num2;
  }

  GetResta(num1: number, num2: number){
    return num1 - num2;
  }
}
