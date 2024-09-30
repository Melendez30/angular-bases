import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
   
<h1>{{title}}</h1>   
<hr>
<!-- <h3>Counter: {{counter}}</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="decrementBy(-1)">-1</button>  -->

    `
})

export class counterComponent  {

    public title: string = 'Hola Mundo';
    public counter: number = 10;
  
    increaseBy(value: number): void
    {
      this.counter += value;
    }
  
    decrementBy(value2: number): void
    {
      this.counter -= value2;
    }
  
    resetCounter() 
    {
      this.counter = 10;
      
    }
    constructor() { }

}