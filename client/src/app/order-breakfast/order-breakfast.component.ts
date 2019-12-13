import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { OrderAndCheckoutService } from '../order-and-checkout.service';

@Component({
  selector: 'app-order-breakfast',
  templateUrl: './order-breakfast.component.html',
  styleUrls: ['./order-breakfast.component.css']
})

export class OrderBreakfastComponent implements OnInit{

  current: any;
  breakfast: any;
  lunch: any;
  snacks: any;
  eatTime: any;
  inCart : any ;
  total : number;
  obj : object;
  inCart1 : Array<any> = []

  constructor(private service : OrderAndCheckoutService, private activatedRoute : ActivatedRoute, private route : Router, private data : OrderAndCheckoutService) {

    this.eatTime=this.activatedRoute.snapshot.paramMap.get("eatTime");
    this.total = 0;
    this.breakfast = [
      {
        dishName : 'Bread Omellete',
        type : 'Non-Veg',
        price : 35
      },
      {
        dishName : 'Poha',
        type : 'Veg',
        price : 25
      },
      {
        dishName : 'Paneer Roll ',
        type : 'Veg',
        price : 50
      },
      {
        dishName : 'Chicken Roll',
        type : 'Non-Veg',
        price : 60
      },
      {
        dishName : 'Paneer S/W',
        type : 'Veg',
        price : 50
      },
      {
        dishName : 'Chicken S/W',
        type : 'Non-Veg',
        price : 60
      },
    ]

    this.lunch = [
      {
        dishName : 'Kadhai Paneer Thali',
        type : 'Veg',
        price : 50
      },
      {
        dishName : 'Chicken Bhuna Thali',
        type : 'Non-Veg',
        price : 60
      },
      {
        dishName : 'Paneer Roll ',
        type : 'Veg',
        price : 50
      },
      {
        dishName : 'Chicken Roll',
        type : 'Non-Veg',
        price : 60
      },
      {
        dishName : 'Paneer S/W',
        type : 'Veg',
        price : 50
      },
      {
        dishName : 'Chicken S/W',
        type : 'Non-Veg',
        price : 60
      },
    ]

    this.snacks = [
      {
        dishName : 'Kadhai Paneer Thali',
        type : 'Veg',
        price : 50
      },
      {
        dishName : 'Chicken Bhuna Thali',
        type : 'Non-Veg',
        price : 60
      },
      {
        dishName : 'Paneer Roll ',
        type : 'Veg',
        price : 50
      },
      {
        dishName : 'Chicken Roll',
        type : 'Non-Veg',
        price : 60
      },
      {
        dishName : 'Paneer S/W',
        type : 'Veg',
        price : 50
      },
      {
        dishName : 'Chicken S/W',
        type : 'Non-Veg',
        price : 60
      },
    ]


    if(this.eatTime == 'breakfast'){
      this.current = this.breakfast;
    }
    else if(this.eatTime == 'lunch'){
      this.current = this.lunch;
    }
    else if(this.eatTime == 'snacks'){
      this.current = this.snacks;
    }
  }

  ngOnInit() {
    this.inCart1 = this.service.feedData();
    this.total = this.service.feedTotalSum();
  }

  addItem(item){
    this.inCart = item
    this.total += item.price 
    this.inCart1.push(this.inCart)
    this.data.uploadData(this.inCart1, this.total);
    console.log(this.inCart1)
  }

  sendData(){
    
  }

  removeItem(item){
    this.total -= item.price;
    console.log(this.inCart1)
     for(let i=0 ;i<this.inCart1.length; i++){
       if(this.inCart1[i].dishName === item.dishName){
         console.log('matchFound')
          this.inCart1.splice(i,1)
       }
     }
     console.log(this.inCart1);
     this.data.uploadData(this.inCart1, this.total);
  }



  checkout(){
    this.route.navigate(['/checkout'])
  }

}
