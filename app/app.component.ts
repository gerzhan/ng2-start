import {Component} from '@angular/core';

@Component ({
  selector: 'my-app',
  template:`
  <div class="jumbotron"> 
    <h1>Angular 2 star!!!</h1>
  </div>
  `,
  styles:[
  `
  .jumbotron { background-color: #fd2f2b;}
  `]
})
export class AppComponent{}