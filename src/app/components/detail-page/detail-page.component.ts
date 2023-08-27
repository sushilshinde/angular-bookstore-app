import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookQty } from 'app/interfaces/interface.book';
import { cartState } from 'app/interfaces/interface.cartState';
import { addItem, getItem } from 'app/store/cart.actions';
import { HttpService } from 'app/core/services/http.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  data: any;
  count: number = 1;
  errorMessage!: any;
  cartData: any;
  existInCart = false;
  id!: number;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private httpService: HttpService,
    private store: Store<{ cartItems: cartState }>
  ) {
    this.activeRoute.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {
    this.store.dispatch(getItem());
    this.store.select('cartItems').subscribe((data) => {
      this.cartData = data.cartItems;
      if(this.cartData){

        const filteredId = this.cartData.map((item: any) => item.id);
        if (filteredId.includes(+this.id)) {
          this.existInCart = true;
      }
      }
    });
    this.httpService.getBookDetails(this.id).subscribe({
      next: (array) => {
        this.data = array;
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });

  }
  onDecrement() { //decrement item
    this.count -= 1;
  }
  onIncrement() { //increment item
    this.count += 1;
  }
  calculateDiscount(price: number, discount: number) {
    //to calculate discount
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  addToCart(bookdata: BookQty) {
    bookdata['quantity'] = this.count;
    this.store.dispatch(addItem({ bookdata }));
    this.route.navigate(['/cart']);
  }
  goToCart() {
    this.route.navigate(['/cart']);
  }
}
