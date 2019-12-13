import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderAndCheckoutService {
// private data =  new BehaviorSubject<Array<object>>([]);
// public share = this.data.asObservable();
public data : Array<object>  = []
public total : number = 0;
constructor() { }

  // updateData(orderList:object){
  //   this.data.push(orderList);
  // }

  uploadData(arr : Array<object>, total : number){
    // this.data.length = 0;
    this.data = [...arr];
    this.total = total;
  }

  feedData(){
    return this.data;
  }

  feedTotalSum(){
    return this.total;
  }
}
