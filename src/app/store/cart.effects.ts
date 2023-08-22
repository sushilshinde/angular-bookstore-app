import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, throwError } from 'rxjs';
import { CartService } from 'app/core/services/cart.service';
import { Injectable } from '@angular/core';
import
  {
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
    removeItemFail,
    loadItemFail,
  } from './cart.actions';
@Injectable()
export class CartEffects
{
  constructor (private action$: Actions, private cartService: CartService) { }

  addItem$ = createEffect(() =>
    this.action$.pipe(
      ofType(addItem),
      switchMap((data: any) =>
      {

        return this.cartService.addCartItems(data.bookdata).pipe(
          map((cartData: any) =>
          {
            return addItemSuccess({ bookdata: cartData });
          })
        );
      })
    )
  );

  getItem$ = createEffect(() =>
    this.action$.pipe(
      ofType(getItem),
      switchMap(() =>
      {
        return this.cartService.getCartItems().pipe(
          map((cartData: any) =>
          {
            return getItemSuccess({ bookdata: cartData });
          }), catchError(err => of(loadItemFail(err))),
        );
      })
    )
  );

  call(err: any)
  {
    console.log(err);

  }

  removeItem$ = createEffect(() =>
  {
    return this.action$.pipe(
      ofType(removeItem),
      switchMap((item: any) =>
      {
        return this.cartService.removeCartItems(item.id).pipe(
          map((cartData: any) =>
          {
            return removeItemSuccess({ id: item.id });
          }),
          catchError(err => of(loadItemFail(err))),
        );
      })
    );
  });
  updateIncrement$ = createEffect(() =>
  {
    return this.action$.pipe(
      ofType(increment),
      switchMap((item: any) =>
      {

        return this.cartService.incrementCartItems(item.id).pipe(
          map((cartData: any) =>
          {
            return incrementItemSuccess({ bookdata: cartData });
          }),
        );
      })
    );
  });
  updateDecrement$ = createEffect(() =>
  {
    return this.action$.pipe(
      ofType(decrement),
      switchMap((item: any) =>
      {

        return this.cartService.decrementCartItems(item.id).pipe(
          map((cartData: any) =>
          {


            return decrementItemSuccess({ bookdata: cartData });
          })
        );
      })
    );
  });
}
