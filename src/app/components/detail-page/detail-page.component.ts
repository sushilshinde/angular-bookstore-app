import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
<<<<<<< HEAD
import { BookQty } from 'src/app/interfaces/interface.book';
import { cartState } from 'src/app/interfaces/interface.cartState';
import { onAdd } from 'src/app/store/cart.actions';
=======
import { BookQty } from 'app/interfaces/interface.bookwithqty';
import { cartState } from 'app/interfaces/interface.cartState';
import { addItem } from 'app/store/cart.actions';
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  data: any;
  count: number = 1;
  constructor(
    private http: HttpClient,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private store: Store<{ cartItems: cartState }>
  ) {}
  ngOnInit(): void {
    let params = new HttpParams().set(
      'id',
      this.activeRoute.snapshot.params['id']
    );
    this.http
      .get(`http://localhost:3000/books`, { params: params })
      .pipe(
        map((responseData: any) => {
          return responseData;
        })
      )
      .subscribe((array) => {
        this.data = array;        //assigning params to data
      });
  }
  onDecrement() {                   //decrement item 
    if (this.count > 1) {
      this.count -= 1;              
    }
  }
  onIncrement() {                   //increment item
    this.count += 1;
  }
  calculateDiscount(price: number, discount: number) {          //to calculate discount
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
<<<<<<< HEAD
  addTOCart(bookdata: BookQty) {              //sending data to cart page
=======
  addToCart(bookdata: BookQty) {
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
    bookdata['quantity'] = this.count;
    this.store.dispatch(addItem({ bookdata }));
    this.route.navigate(['/cart']);
  }
}
