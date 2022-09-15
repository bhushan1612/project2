 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public user="Nice Day";
  public username="Angular";
  public trainer="Amit sir";

  getname(){
    alert("The function is called here")
  }
   
}
