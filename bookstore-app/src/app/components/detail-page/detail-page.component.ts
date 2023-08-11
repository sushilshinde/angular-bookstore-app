import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/interfaces/interface.book';
import { BookQty } from 'src/app/interfaces/interface.bookwithqty';
import { cartState } from 'src/app/interfaces/interface.cartState';
import { onAdd } from 'src/app/store/cart.actions';

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
    let params = new HttpParams().set('id',this.activeRoute.snapshot.params['id']);
    this.http.get(`http://localhost:3000/books`, { params: params })
      .pipe(
        map((responseData: any) => {
          return responseData;
        })
      )
      .subscribe((array) => {
        console.log(array, 'details data');
        this.data = array;
      });
  }
  onDecrement() {
    if (this.count > 1) {
      this.count -= 1;
    }
  }
  onIncrement() {
    this.count += 1;
  }
  calculateDiscount(price: number, discount: number) {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  addTOCart(bookdata: BookQty) {
    bookdata['quantity'] = this.count;
    this.store.dispatch(onAdd({ bookdata }));
    this.route.navigate(['/cart']);
  }
}
