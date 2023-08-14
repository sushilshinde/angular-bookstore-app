import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit
{
  cartData: any;
  count: number = 0;
  constructor (private http: HttpClient) { }
  ngOnInit(): void
  {
    this.http.get("http://localhost:3000/carousel").pipe(
      map((responseData: any) =>
      {
        const array = [];
        // for (const key in responseData) {
        //   if (responseData.hasOwnProperty(key)) {
        //     array.push({ ...responseData[key], id: key });
        //   }
        // }
        array.push(...responseData);
        return array;
      })
    )
      .subscribe(array =>
      {
        this.cartData = array;
        console.log(this.cartData, "JSONdata")
      })
  }
}
