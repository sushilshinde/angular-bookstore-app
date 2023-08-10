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
  totalPrice:number=0

updatePrice(){
  this.totalPrice=this.cartData.reduce((acc:number,value)=>{return acc+value.price*value.quantity},0)
}

constructor(private store:Store<{cartItems:cartState}>){
}
ngOnInit(): void {
  this.store.select('cartItems').subscribe((data)=>{
    this.cartData=data.cartItems;
  })
  this.updatePrice();

 }

//  getDetails(){
//   this.store.select('cartItems').subscribe((data)=>{console.log(data)})
//  }
 onRemoveHandeller(id:number){
this.store.dispatch(onDelete({id}))
this.updatePrice()
 }
 onIncrement(item:BookQty){
  this.store.dispatch(increment({item}))
  this.updatePrice()
 }
 onDecrement(item:BookQty){
  this.store.dispatch(decrement({item}))
  this.updatePrice()
 }
}
  