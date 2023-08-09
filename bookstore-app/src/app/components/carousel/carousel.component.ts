import { Component } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})
export class CarouselComponent 
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
}

