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
  errorOccur,
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
          }), catchError(err => of(errorOccur(err))),
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
          }), catchError(err => of(errorOccur(err))),
        );
      })
    )
  );

  removeItem$ = createEffect(() =>
  {
    return this.action$.pipe(
      ofType(removeItem),
      switchMap((data: any) =>
      {
        return this.cartService.removeCartItems(data.bookdata).pipe(
          map((cartData: any) =>
          {
            return removeItemSuccess({ bookdata: cartData });
          }),
          catchError(err => of(errorOccur(err))),
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
        return this.cartService.updateCartItems(item.id, "increment").pipe(
          map((cartData: any) =>
          {
            return incrementItemSuccess({ bookdata: cartData });
          }), catchError(err => of(errorOccur(err))),
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

        return this.cartService.updateCartItems(item.id, "decrement").pipe(
          map((cartData: any) =>
          {
            return decrementItemSuccess({ bookdata: cartData });
          }), catchError(err => of(errorOccur(err))),
        );
      })
    );
  });
}
