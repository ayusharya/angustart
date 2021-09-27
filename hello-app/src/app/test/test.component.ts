import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
@Input() public parentData;
@Output() public childEvent= new EventEmitter();
  public name = "Ayush";
  public name2way="";
  public urlname = window.location.href;
  public successtext = "text-success";
  public specialtext = "text-special";
  public harmtext = true;
  public CSSproperty = "yellow";
  public eventproperty="";
  public ifvalue=true;
  public color="red";
  public colorfor=["red","green","yellow","pink","blue"];
  public messageclass=
  {
    "text-success": !this.harmtext,
    "text-failure" : this.harmtext,
    "text-special": this.specialtext
  }
  public multiplestyles ={
  color: "orange",
  fontStyle: "italic"
  }
fireEvent()
{
  this.childEvent.emit('Hi child to parent');
}
  onClick(event){
   console.log(event)
   this.eventproperty='Welcome to event'
   this.eventproperty=event.type;
    }
  namevalue(value)
    {
  alert(value)
    }
  constructor() { }

  ngOnInit(): void {
  }

  Hellouser()
  {
    return "hello" + this.name;
  }
}
