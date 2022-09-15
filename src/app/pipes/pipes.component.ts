import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  Date:(any)= new Date();
  public user="Bhushan ";
  public user1="Ajay ";
  public user2="Mahajan";
  public user3=" state:-Maharastra";


  constructor() { }

  public chemical=[
    {Name:'Hydrogen',Weight:'1.000',Symbol:'H'},
    {Name:'Helium',Weight:'1.000',Symbol:'He'},
    {Name:'Lithium',Weight:'1.000',Symbol:'Li'},
    {Name:'Beryllium',Weight:'1.000',Symbol:'Be'},
    
  ]

  ngOnInit(): void {
  }

}
