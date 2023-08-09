import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface.book';
import { map } from 'rxjs';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})
export class CarouselComponent implements OnInit
{
  carouselData: any[] = [];
  content: any[] = [
    {
      imgUrl: '../../../assets/images/carousel images/carousel-1.jpg',
      title: 'A Thousand Boy Kisses',
      id: 3,
    },
    {
      imgUrl: '../../../assets/images/carousel images/carousel-2.jpg',
      title: 'Divine Rivals',
      id: 6,
    },
    {
      imgUrl: '../../../assets/images/carousel images/carousel-3.jpg',
      title: 'Baking Yesteryear : The Best Recipes from the 1900s to the 1980s',
      id: 7,
    },
    {
      imgUrl: '../../../assets/images/carousel images/carousel-4.jpg',
      title: 'Light Bringer - A Red Rising Novel',
      id: 8,
    },
  ];
  constructor (private http: HttpClient) { }
  ngOnInit()
  {
    return this.http.get<Book[]>('http://localhost:3000/carousel')
      .pipe(
        map((data) =>
        {
          const dataArray = [];
          dataArray.push(...data);
          return dataArray;
        })
      )
      .subscribe(array =>
      {
        this.carouselData = array;
        console.log(this.carouselData);

      })
  }
}

