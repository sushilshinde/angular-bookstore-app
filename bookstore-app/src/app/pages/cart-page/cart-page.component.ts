import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/interfaces/interface.book';
import { BookQty } from 'src/app/interfaces/interface.bookwithqty';
import { cartState } from 'src/app/interfaces/interface.cartState';
import { decrement, onDelete } from 'src/app/store/cart.actions';
import { increment } from 'src/app/store/cart.actions';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit
{
  cartData!:BookQty[];
  count: number = 0;

constructor(private store:Store<{cartItems:cartState}>){
}
ngOnInit(): void {
  this.store.select('cartItems').subscribe((data)=>{
    this.cartData=data.cartItems;
  })
  // this.store.select('cartItems')
 }

//  getDetails(){
//   this.store.select('cartItems').subscribe((data)=>{console.log(data)})
//  }
 onRemoveHandeller(id:number){
this.store.dispatch(onDelete({id}))
 }
 onIncrement(item:BookQty){
  this.store.dispatch(increment({item}))
 }
 onDecrement(item:BookQty){
  this.store.dispatch(decrement({item}))
 }
}
  // constructor (private http: HttpClient) { }
  // ngOnInit(): void
  // {
  //   this.http.get("http://localhost:3000/carousel").pipe(
  //     map((responseData: any) =>
  //     {
  //       const array = [];
  //       // for (const key in responseData) {
  //       //   if (responseData.hasOwnProperty(key)) {
  //       //     array.push({ ...responseData[key], id: key });
  //       //   }
  //       // }
  //       array.push(...responseData);
  //       return array;
  //     })
  //   )
  //     .subscribe(array =>
  //     {
  //       this.cartData = array;
  //       console.log(this.cartData, "JSONdata")
  //     })
  // }

 