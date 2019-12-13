import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-logged-in-page',
  templateUrl: './logged-in-page.component.html',
  styleUrls: ['./logged-in-page.component.css']
})
export class LoggedInPageComponent implements OnInit {
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  order_breakfast(){
    console.log("Ordering Breakfast")
    this.router.navigate(['/orderBreakfast', 'breakfast'])
  }

  order_lunch(){
    console.log("Ordering lunch")
    this.router.navigate(['/orderBreakfast','lunch'])
  }

  order_snacks(){
    console.log("Ordering Snacks")
    this.router.navigate(['/orderBreakfast', 'snacks'])
  }
}
