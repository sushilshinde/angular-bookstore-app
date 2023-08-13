import { createAction,props } from "@ngrx/store";
import { BookQty } from "../interfaces/interface.book";

export const onAdd=createAction('onAdd',props<{bookdata:BookQty}>())
export const onDelete=createAction('onDelete',props<{id:number}>())
export const increment=createAction('increment',props<{item:BookQty}>())
export const decrement=createAction('decrement',props<{item:BookQty}>())