import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit
{
  data: any;
  count: number=0;
  constructor (private http: HttpClient) { }
  ngOnInit(): void
  {
    let params = new HttpParams().set('id', '20');
    this.http.get(`http://localhost:3000/books`, { params: params }).pipe(
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
        this.data = array;
        console.log(this.data, "JSONdata")
      })
  }
}
