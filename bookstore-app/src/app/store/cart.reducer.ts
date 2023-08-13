import { createReducer, on } from '@ngrx/store';
import { BookQty } from '../interfaces/interface.book';
import { cartState } from '../interfaces/interface.cartState';
import { decrement, increment, onAdd, onDelete } from './cart.actions';

export const initialState: cartState = {
  cartItems: [
    {
      title: 'It Starts with Us',
      id: 7,
      price: 1000,
      thumbnailUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGasNqKInCpdzxEnVUrcjaBmB8pHq99H4U7U-vQaVhElWEIwiU',
      longDescription:
        'Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date. But her excitement is quickly hampered by the knowledge that, though they are no longer married, Ryle is still very much a part of her life—and Atlas Corrigan is the one man he will hate being in his ex-wife and daughter’s life. Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the “gripping, pulse-pounding” (Sarah Pekkanen, author of Perfect Neighbors) bestselling phenomenon It Ends with Us left off. Revealing more about Atlas’s past and following Lily as she embraces a second chance at true love while navigating a jealous ex-husband, it proves that “no one delivers an emotional read like Colleen Hoover” (Anna Todd, New York Times bestselling author).',
      status: 'PUBLISH',
      authors: ['Colleen Hoover'],
      categories: ['Trending'],
      quantity: 4,
    },
  ],
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
