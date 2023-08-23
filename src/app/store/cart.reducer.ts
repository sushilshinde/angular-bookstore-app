import { createReducer, on } from '@ngrx/store';
import { cartState } from '../interfaces/interface.cartState';
import
{
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
  errorOccur,
} from './cart.actions';

export const initialState: cartState = {
  cartItems: [],
  error: ''
};
export const cartReducer = createReducer(
  initialState,
  on(addItem, (state: cartState, action) =>
  {
    return state;
  }),
  on(addItemSuccess, (state, action) =>
  {
    const bookd = { ...action.bookdata };
    return {
      cartItems: [...state.cartItems, bookd],
      error: ''
    };
  }),
  on(getItem, (state: cartState) =>
  {
    return state;
  }),
  on(getItemSuccess, (state: cartState, action) =>
  {
    const bookd = action.bookdata;
    return {
      cartItems: [bookd],
      error: ''
    };
  }),
  on(increment, (state, action) =>
  {
    return state;
  }),
  on(incrementItemSuccess, (state, action: any) =>
  {
    return {
      error: '',
      cartItems: [action.bookdata],
    };
  }),
  on(decrement, (state, action) =>
  {
    return state;
  }),
  on(decrementItemSuccess, (state, action: any) =>
  {
    return {
      error: '',
      cartItems: [action.bookdata],
    };
  }),
  on(removeItem, (state, action) =>
  {
    return state;
  }),
  on(removeItemSuccess, (state, action) =>
  {
    const cart: any = [...state.cartItems][0];
    const filteredArr = cart.filter((item: any) => item.id !== action.id);
    return {
      error: '',
      cartItems: [filteredArr],
    };
  }),
  on(errorOccur, (state, action) =>
{
    return {
      ...state,
      error: action.error
    }
  })
);
