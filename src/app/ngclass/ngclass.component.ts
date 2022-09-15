import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isError = true;
  public iswarning = false;
  public isdanger = false;
  public user = {
    "one": this.isError,
    "text-warning": this.iswarning,
    "text-info": this.isdanger
  }
}
