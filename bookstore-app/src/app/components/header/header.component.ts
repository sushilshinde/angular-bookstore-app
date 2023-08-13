import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartState } from 'src/app/interfaces/interface.cartState';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  count:number=0;
constructor( private store:Store<{cartItems:cartState}>){   //getting store
}
 ngOnInit(): void {
    this.store.select('cartItems').subscribe((data)=>{
        this.count=data.cartItems.length                    //returning cart length and assigning to count
      })
 }

}
