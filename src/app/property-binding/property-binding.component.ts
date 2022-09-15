import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // public head="head1";

  inputplaceHolder = "Enter your name";
  inputplaceHolder2 = "+91";

  usernumber(){
    alert("confirmed your number")
  }

  btn(){
    alert("Thnakyou for registration")
  }
 
}
