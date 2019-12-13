import { Component, OnInit } from '@angular/core';
import { EmpSrvService } from '../services/EmployeeService/emp-srv.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(private _empService :EmpSrvService,private router : Router) { }

  public e = {
    empId : undefined,
    empName : "",
    empMail : "",
    empPassword : "",
    isVendor : false
  };
  public empFromService = [];

  ngOnInit() {
    // this.emp = {
    //   name : "",
    //   id : "",
    //   mail : "",
    //   pswd : ""
    // };
  }

  encrpt = () =>{
    this.e.empPassword = btoa(this.e.empPassword);
  }

  SignUp = () =>{
    if(this.validateInputs(this.e)){
      console.log(this.e);
      this._empService.addEmployee(this.e).subscribe(data=> {
        if(data){
          this.router.navigate(['/'])
        }
      });


    }
  }

  validateInputs = (e) =>{
    if(e.empId && e.empMail && e.empPassword){
      
      return true
    }
    return false
  }

}
