import { createReducer, on } from '@ngrx/store';
import { cartState } from '../interfaces/interface.cartState';
import {
  decrement,
  increment,
  addItem,
  addItemSuccess,
  getItem,
  getItemSuccess,
  removeItem,
  removeItemSuccess,
  incrementItemSuccess,
  decrementItemSuccess,
} from './cart.actions';

export const initialState: cartState = {
  cartItems: [],
};
export const cartReducer = createReducer(
  initialState,
  on(addItem, (state: cartState, action) => {
    return state;
  }),
  on(addItemSuccess, (state, action) => {
    const bookd = { ...action.bookdata };
    return {
      cartItems: [...state.cartItems, bookd],
    };
  }),
  on(getItem, (state: cartState) => {
    return state;
  }),
  on(getItemSuccess, (state: cartState, action) => {
    const bookd = action.bookdata;
    return {
      cartItems: [bookd],
    };
  }),
  // const bookd = { ...action.bookdata };
  // let allid = [];
  // for (let id of state.cartItems) {
  //   allid.push(id.id);
  // }
  // if (allid.includes(bookd.id)) {
  //   return state;
  // } else {
  //   return {
  //     cartItems: [...state.cartItems, bookd],
  //   };
  // }
  on(increment, (state, action) => {
    return state;
  }),
  on(incrementItemSuccess, (state, action: any) => {
    let cart: any = JSON.parse(JSON.stringify(state.cartItems[0]));
    const index = cart.findIndex((item: any) => item.id === action.bookdata.id);
    cart[index] = action.bookdata;
    return {
      cartItems: [cart],
    };
  }),
  on(decrement, (state, action) => {
    return state;
  }),
  on(decrementItemSuccess, (state, action: any) => {
    let cart: any = JSON.parse(JSON.stringify(state.cartItems[0]));
    const index = cart.findIndex((item: any) => item.id === action.bookdata.id);
    cart[index] = action.bookdata;
    return {
      cartItems: [cart],
    };
  }),
  on(removeItem, (state, action) => {
    return state;
  }),
  on(removeItemSuccess, (state, action) => {
    const cart: any = [...state.cartItems][0];
    const filteredArr = cart.filter((item: any) => item.id !== action.id);
    return {
      cartItems: [filteredArr],
    };
  })
);
