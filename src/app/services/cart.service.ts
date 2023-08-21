import { Injectable } from '@angular/core';
import { Book } from '../interfaces/interface.book';
@Injectable({ providedIn: 'root' })
export class cart {
  cartItems: Book[] = [];

  onAddTocart(item: Book) {
    this.cartItems.push(item);
  }
}
