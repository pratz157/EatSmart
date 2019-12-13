import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.css']
})
export class HomePageHeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    
  }

  emp_login(){
    this.router.navigate(['/emp_login'])
  }

  canManager_login(){
    this.router.navigate(['/canManager_login'])
  }

  signUp(){
    this.router.navigate(['./signUp'])
  }

  loadHomePage(){
    this.router.navigate([''])
  }
}
