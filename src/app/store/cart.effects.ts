import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CartService } from 'app/core/services/cart.service';
import { Injectable } from '@angular/core';
import {
  getItem,
  getItemSuccess,
  addItem,
  addItemSuccess,
  removeItem,
  removeItemSuccess,
  increment,
  incrementItemSuccess,
  decrement,
  decrementItemSuccess,
} from './cart.actions';
@Injectable()
export class CartEffects {
  constructor(private action$: Actions, private cartService: CartService) {}

  addItem$ = createEffect(() =>
    this.action$.pipe(
      ofType(addItem),
      switchMap((data: any) => {
        console.log(data, 'data');
        // return of(onAdd({ bookdata: data.bookdata }))
        return this.cartService.addCartItems(data.bookdata).pipe(
          map((cartData: any) => {
            console.log(cartData, 'data 123');
            return addItemSuccess({ bookdata: cartData });
          })
        );
      })
    )
  );

  getItem$ = createEffect(() =>
    this.action$.pipe(
      ofType(getItem),
      switchMap(() => {
        return this.cartService.getCartItems().pipe(
          map((cartData: any) => {
            return getItemSuccess({ bookdata: cartData });
          })
        );
      })
    )
  );

  removeItem$ = createEffect(() => {
    return this.action$.pipe(
      ofType(removeItem),
      switchMap((item: any) => {
        return this.cartService.removeCartItems(item.id).pipe(
          map((cartData: any) => {
            console.log(cartData, 'response-deleted data');
            return removeItemSuccess({ id: item.id });
          })
        );
      })
    );
  });
  updateIncrement$ = createEffect(() => {
    return this.action$.pipe(
      ofType(increment),
      switchMap((item: any) => {
        console.log(item, 'switchmap');
        return this.cartService.incrementCartItems(item.id).pipe(
          map((cartData: any) => {
            return incrementItemSuccess({ bookdata: cartData });
          })
        );
      })
    );
  });
  updateDecrement$ = createEffect(() => {
    return this.action$.pipe(
      ofType(decrement),
      switchMap((item: any) => {
        console.log(item, 'switchmap');
        return this.cartService.decrementCartItems(item.id).pipe(
          map((cartData: any) => {
            console.log(cartData, 'response-deleted data');

            return decrementItemSuccess({ bookdata: cartData });
          })
        );
      })
    );
  });
}
