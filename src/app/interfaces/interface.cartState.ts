import { BookQty } from "./interface.book";

export interface cartState
{  //cartstate interface for cart items
    cartItems: BookQty[],
    error: String
}