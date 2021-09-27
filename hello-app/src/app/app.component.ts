import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-app';
  public name1="Ayush Arya";
  public message="";
  constructor(){

  }
  execute(){
    alert("HI");
  }
 //name="priya";
}
