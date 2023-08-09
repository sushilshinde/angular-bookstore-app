import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit
{
  datas: any;
  count: number=0;
  constructor (private http: HttpClient,private activeRoute:ActivatedRoute) { }
  ngOnInit(): void
  {
    let params = new HttpParams().set('id', this.activeRoute.snapshot.params['id']);
    this.http.get(`http://localhost:3000/books`, { params: params }).pipe(
      map((responseData: any) =>
      {
        const array = [];
        array.push(...responseData);
        return array;
      })
    )
      .subscribe(array =>
      {
        this.datas = array;
      })
  }
  calculateDiscount(price: number, discount: number)
  {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  addItems()
  {
    alert("Added to cart!")
  }
}
