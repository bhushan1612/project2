import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif1',
  templateUrl: './ngif1.component.html',
  styleUrls: ['./ngif1.component.css']
})
export class Ngif1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fName = "";
  lName = "";
  email = "";
  pass = "";
  fNameProperty = "Enter First Name ";
  lNameProperty = "Enter Last Name ";
  emailproperty = "Enter your email";
  passproperty = "Enter your password";
  fNamengError = {};
  lNamengError = {};
  emailngError = {};
  passngError = {};
  isEmailPresent = false;
  


  // loadUserNameFromCache() {
  //   this.fName ="";
  //   this.lName = "";
  // }

  checkTheFileds() {

    if(this.fName == '' || this.lName == '' || this.email == '' || this.pass == '') {
      alert('Please Fill all the Details in the Form ');
      
    }
    this.fNamengError = {"bg-danger":this.fName.length<=0};
      this.lNamengError = {"bg-danger":this.lName.length<=0};
      this.emailngError = {"bg-danger":this.email.length<=0};
      this.passngError = {"bg-danger":this.pass.length<=0};

      this.isEmailPresent = this.email.length>0;


  }
  

  // submit= false;

  // click(){
  //   alert("Are you Confirmed to submit")
  //   this.submit=true;
  // }

 }
