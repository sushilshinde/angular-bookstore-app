import { Component,OnInit ,OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { cartState } from 'src/app/interfaces/interface.cartState';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit,OnDestroy {
  count:number=0;
  cartItemsSubscription!:Subscription;
constructor( private store:Store<{cartItems:cartState}>){   //getting store
}
 ngOnInit(): void {
  this.cartItemsSubscription =  this.store.select('cartItems').subscribe((data)=>{
        this.count=data.cartItems.length                    //returning cart length and assigning to count
      })
 }
ngOnDestroy(){
  if (this.cartItemsSubscription) {
    this.cartItemsSubscription.unsubscribe();              //unsubscription
  }
}
}
