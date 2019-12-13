import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-emp-login-page',
  templateUrl: './emp-login-page.component.html',
  styleUrls: ['./emp-login-page.component.css']
})
export class EmpLoginPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  emp_loggedIn(){
    this.router.navigate(['./emp_loggedIn'])
  }
}
