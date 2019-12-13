import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-emp-logged-in-header',
  templateUrl: './emp-logged-in-header.component.html',
  styleUrls: ['./emp-logged-in-header.component.css']
})
export class EmpLoggedInHeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  orderToday(){
    this.router.navigate(['emp_loggedIn/orderToday'])
  }

  loadHomePage(){
    this.router.navigate(['./emp_loggedIn'])
  }

  logOut(){
    this.router.navigate([''])
  }
}
