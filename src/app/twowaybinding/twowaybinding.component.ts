import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public mod=" ";
  public num="+91";
  final(){
    alert("Thank You for Registration")
  }
  
}
