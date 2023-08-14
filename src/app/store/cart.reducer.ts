import { createReducer, on } from '@ngrx/store';
import { BookQty } from '../interfaces/interface.book';
import { cartState } from '../interfaces/interface.cartState';
import { decrement, increment, onAdd, onDelete } from './cart.actions';

export const initialState: cartState = {
  cartItems: [],
};
export const cartReducer = createReducer(
  initialState,
  on(onAdd, (state: cartState, action) => {
    const bookd = { ...action.bookdata };
    let allid = [];
    for (let id of state.cartItems) {
      allid.push(id.id);
    }
    if (allid.includes(bookd.id)) {
      return state;
    } else {
      return {
        cartItems: [...state.cartItems, bookd],
      };
    }
  }),
  on(onDelete, (state: cartState, action) => {
    return {
      cartItems: [...state.cartItems.filter((value) => value.id !== action.id)],
    };
  }),
  on(increment, (state: cartState, action) => {
    let currentQuantity = action.item.quantity;
    let incitem: BookQty = { ...action.item, quantity: currentQuantity + 1 };
    return {
      cartItems: [
        ...state.cartItems.filter((value) => value.id !== action.item.id),
        incitem,
      ],
    };
  }),
  on(decrement, (state: cartState, action) => {
    let currentQuantity = action.item.quantity;
    if (currentQuantity > 1) {
      let incitem: BookQty = { ...action.item, quantity: currentQuantity - 1 };
      return {
        cartItems: [
          ...state.cartItems.filter((value) => value.id !== action.item.id),
          incitem,
        ],
      };
    } else {
      return state;
    }
  })
);
