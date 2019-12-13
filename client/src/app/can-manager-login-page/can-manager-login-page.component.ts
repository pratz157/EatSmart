import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-can-manager-login-page',
  templateUrl: './can-manager-login-page.component.html',
  styleUrls: ['./can-manager-login-page.component.css']
})
export class CanManagerLoginPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  canManager_loggedIn(){
    this.router.navigate(['./canteenManager_loggedIn'])
  }
}

