import { Injectable } from "@angular/core";
import { Book } from "./interface.book";

@Injectable({providedIn:"root"})
export class cart {

    cartItems:Book[]=[]

    onAddTocart(item:Book){
        this.cartItems.push(item);
    }
    
    

}