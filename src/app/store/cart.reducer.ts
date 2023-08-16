import { createReducer, on } from '@ngrx/store';
<<<<<<< HEAD
import { BookQty } from '../interfaces/interface.book';
import { cartState } from '../interfaces/interface.cartState';
import { decrement, increment, onAdd, onDelete } from './cart.actions';
=======
import { cartState } from '../interfaces/interface.cartState';
import { decrement, increment, addItem, addItemSuccess, getItem, getItemSuccess, removeItem, removeItemSuccess, incrementItemSuccess, decrementItemSuccess } from './cart.actions';

>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6

export const initialState: cartState = {
  cartItems: [],
};
export const cartReducer = createReducer(
  initialState,
<<<<<<< HEAD
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
=======
  on(addItem, (state: cartState, action) =>
  {
    return state;
  }),
  on(addItemSuccess, (state, action) =>
  {

    const bookd = { ...action.bookdata };
    return {
      cartItems: [...state.cartItems, bookd],
    };
  }),
  on(getItem, (state: cartState) =>
  {

    return state;
  }),
  on(getItemSuccess, (state: cartState, action) =>
  {

    const bookd = action.bookdata
    return {
      cartItems: [bookd]
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
  on(increment, (state, action) =>
  {

    return state;
  }),
  on(incrementItemSuccess, (state, action: any) =>
  {
    let cart: any = JSON.parse(JSON.stringify(state.cartItems[0]));
    const index = cart.findIndex((item: any) => item.id === action.bookdata.id);
    cart[index] = action.bookdata;
    return {
      cartItems: [cart]
    }
  }),
  on(decrement, (state, action) =>
  {
    return state;
  }), on(decrementItemSuccess, (state, action: any) =>
  {
    let cart: any = JSON.parse(JSON.stringify(state.cartItems[0]));
    const index = cart.findIndex((item: any) => item.id === action.bookdata.id);
    cart[index] = action.bookdata;
    return {
      cartItems: [cart]
    }
  }),
  on(removeItem, (state, action) =>
  {
    return state
  }),
  on(removeItemSuccess, (state, action) =>
  {
    const cart: any = [...state.cartItems][0];
    const filteredArr = cart.filter((item: any) => item.id !== action.id);
    return {
      cartItems: [filteredArr]
    };
  }),



>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
);
