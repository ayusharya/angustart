import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'hello-app';
  public name1="Ayush Arya";
  public message="";
  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}
  execute(){
   // alert("HI");
    this.router.navigate(['emp']);
  }
 //name="priya";
}
