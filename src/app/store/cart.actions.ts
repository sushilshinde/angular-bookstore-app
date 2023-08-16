<<<<<<< HEAD
import { createAction,props } from "@ngrx/store";
import { BookQty } from "../interfaces/interface.book";

export const onAdd=createAction('onAdd',props<{bookdata:BookQty}>())
export const onDelete=createAction('onDelete',props<{id:number}>())
export const increment=createAction('increment',props<{item:BookQty}>())
export const decrement=createAction('decrement',props<{item:BookQty}>())
=======
import { createAction, props } from "@ngrx/store";
import { BookQty } from "../interfaces/interface.bookwithqty";

export const addItem = createAction('addItem', props<{ bookdata: BookQty }>())
export const addItemSuccess = createAction('addItemSuccess', props<{ bookdata: BookQty }>())
// export const onDelete=createAction('onDelete',props<{id:number}>())
export const increment = createAction('increment', props<{ id: number }>())
export const incrementItemSuccess = createAction('incrementItemSuccess', props<{ bookdata: BookQty }>())
export const decrement = createAction('decrement', props<{ id: number }>())
export const decrementItemSuccess = createAction('decrementItemSuccess', props<{ bookdata: BookQty }>())
export const getItem = createAction('getItem')
export const getItemSuccess = createAction('getItemSuccess', props<{ bookdata: BookQty }>())
export const removeItem = createAction('removeItem', props<{ id: number }>())
export const removeItemSuccess = createAction('removeItemSuccess', props<{ id: number }>())
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
