import { Component, OnInit } from '@angular/core';
import { OrderAndCheckoutService } from '../order-and-checkout.service';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  handler: any = null;
  total : any = 0;
  constructor(private data : OrderAndCheckoutService) { 
   
  }
  orderList : Array<object> = [];
  ngOnInit() {
    this.loadStripe();
    // this.data.share.subscribe(x=> {this.orderList=x})
    this.orderList=this.data.data;
    this.total = this.data.total
    console.log(this.orderList)
  }

  pay() {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: this.total * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}
