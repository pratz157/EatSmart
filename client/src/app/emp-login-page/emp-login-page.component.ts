import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { EmpSrvService } from '../services/EmployeeService/emp-srv.service';


@Component({
  selector: 'app-emp-login-page',
  templateUrl: './emp-login-page.component.html',
  styleUrls: ['./emp-login-page.component.css']
})
export class EmpLoginPageComponent implements OnInit {

  constructor(private _empService :EmpSrvService,private router : Router) { }

  private email : string;
  private pswd : string

  ngOnInit() {
  }

  emp_loggedIn(){

    if(this.email && this.pswd){
      let obj = {
        empMail : this.email,
        empPassword: btoa(this.pswd)
      }

      this._empService.validateEmployee(obj).subscribe(data=> {
        if(data.authorised){
          this.router.navigate(['./emp_loggedIn'])
        }
      });

      
    }
    
  }
}
