import { createAction, props } from "@ngrx/store";
import { BookQty } from "app/interfaces/interface.book";

export const addItem = createAction('addItem', props<{ bookdata: BookQty }>())
export const addItemSuccess = createAction('addItemSuccess', props<{ bookdata: BookQty }>())
export const increment = createAction('increment', props<{ id: number }>())
export const incrementItemSuccess = createAction('incrementItemSuccess', props<{ bookdata: BookQty }>())
export const decrement = createAction('decrement', props<{ id: number }>())
export const decrementItemSuccess = createAction('decrementItemSuccess', props<{ bookdata: BookQty }>())
export const getItem = createAction('getItem')
export const getItemSuccess = createAction('getItemSuccess', props<{ bookdata: BookQty }>())
export const errorOccur = createAction('errorOccur', props<{ error: String }>())
export const removeItem = createAction('removeItem', props<{ id: number }>())
export const removeItemSuccess = createAction('removeItemSuccess', props<{ id: number }>())
export const removeItemFail = createAction('removeItemFail', props<{ error: String }>())
