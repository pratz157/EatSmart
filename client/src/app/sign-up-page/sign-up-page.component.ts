import { Component, OnInit } from '@angular/core';
import { EmpSrvService } from '../services/emp-srv.service';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(private _empService :EmpSrvService) { }

  public emp : Object;
  public empFromService = [];

  ngOnInit() {
    this.emp = {
      name : "",
      id : "",
      mail : "",
      pswd : ""
    };
  }

  encrpt = () =>{
    this.emp['pswd'] = btoa(this.emp['pswd']);
  }

  SignUp = () =>{
    if(this.validateInputs(this.emp)){
      // console.log(this.emp);
      this._empService.getEmployees().subscribe(data=> {
        console.log("Data", data);
        this.empFromService = data
      });


    }
  }

  validateInputs = (e) =>{
    if(e.name && e.id && e.mail && e.pswd){
      
      return true
    }
    return false
  }

}
