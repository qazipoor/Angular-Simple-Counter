import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="mainArea">
    <p>Counter: <span>{{ counter }}</span></p>
    <button id="mainButton" (click)="increment()">Hit to increase</button>
  </div>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'Angular-Simple-Counter';
  counter: number = 0;

  increment() {
    this.counter++;
  }
}
