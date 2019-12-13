import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-can-manager-logged-in-header',
  templateUrl: './can-manager-logged-in-header.component.html',
  styleUrls: ['./can-manager-logged-in-header.component.css']
})
export class CanManagerLoggedInHeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  uploadMenu(){
    this.router.navigate(['/canManager_loggedIn'])
  }

  loadHomePage(){
    this.router.navigate([''])
  }
}
