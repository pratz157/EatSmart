import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import {MatDialog} from '@angular/material/dialog';
import {AddItemComponent} from '../add-item/add-item.component'

@Component({
  selector: 'app-can-manager-logged-in-page',
  templateUrl: './can-manager-logged-in-page.component.html',
  styleUrls: ['./can-manager-logged-in-page.component.css']
})
export class CanManagerLoggedInPageComponent implements OnInit {
  menuTime: any;
  defaultBreakfast: any;
  defaultLunch: any;
  defaultSnacks: any;
  current: any;
  breakfastArray : Array<object> = []
  lunchArray : Array<object> = []
  snacksArray : Array<object> = []
  flag : any;

  constructor(private route: Router, public dialog: MatDialog) {
    this.defaultBreakfast = [
      {
        dishName: 'Bread Omellete',
        type: 'Non-Veg',
        price: 35
      },
      {
        dishName: 'Poha',
        type: 'Veg',
        price: 25
      },
      {
        dishName: 'Paneer Roll ',
        type: 'Veg',
        price: 50
      },
      {
        dishName: 'Chicken Roll',
        type: 'Non-Veg',
        price: 60
      },
      {
        dishName: 'Paneer S/W',
        type: 'Veg',
        price: 50
      },
      {
        dishName: 'Chicken S/W',
        type: 'Non-Veg',
        price: 60
      },
    ]

    this.defaultLunch = [
      {
        dishName: 'Kadhai Paneer Thali',
        type: 'Veg',
        price: 50
      },
      {
        dishName: 'Chicken Bhuna Thali',
        type: 'Non-Veg',
        price: 60
      },
      {
        dishName: 'Paneer Roll ',
        type: 'Veg',
        price: 50
      },
      {
        dishName: 'Chicken Roll',
        type: 'Non-Veg',
        price: 60
      },
      {
        dishName: 'Paneer S/W',
        type: 'Veg',
        price: 50
      },
      {
        dishName: 'Chicken S/W',
        type: 'Non-Veg',
        price: 60
      },
      {
        dishName: 'Chicken Shwarma',
        type: 'Non-Veg',
        price: 100
      },
    ]

    this.defaultSnacks = [
      {
        dishName: 'Kadhai Paneer Thali',
        type: 'Veg',
        price: 50
      },
      {
        dishName: 'Chicken Bhuna Thali',
        type: 'Non-Veg',
        price: 60
      },
      {
        dishName: 'Paneer Roll ',
        type: 'Veg',
        price: 50
      },
      {
        dishName: 'Chicken Roll',
        type: 'Non-Veg',
        price: 60
      },
      {
        dishName: 'Paneer S/W',
        type: 'Veg',
        price: 50
      },
      {
        dishName: 'Chicken S/W',
        type: 'Non-Veg',
        price: 60
      },
    ]
  }//Constructor

  ngOnInit() {
    this.current = this.defaultBreakfast
  }//OnInit

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result)
        this.current.push(result);
    });
  }

  remove = (e) =>{
    let arr = this.current.concat([]);
    this.current = arr.filter(i => i.dishName != e);
  }

  uploadMenu(e){
    if(e == 0){
      this.upload_breakfast()
    }else if(e == 1){
      this.upload_lunch()
    }else if(e == 2){
      this.upload_snacks();
    }
  }

  upload_breakfast() {
    console.log("Ordering Breakfast")
    this.current = this.defaultBreakfast
    
  }

  upload_lunch() {
    console.log("Ordering Lunch")
    this.current = this.defaultLunch
    
  }

  upload_snacks() {
    console.log("Ordering Snacks")
    this.current = this.defaultSnacks
  }


}
