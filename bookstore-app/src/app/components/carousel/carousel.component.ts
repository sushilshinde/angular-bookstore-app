import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
 
})
export class CarouselComponent {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  content: any[] = [
    {
      imgUrl: '../../../assets/images/carousel-1.png',
      title: 'Book 1',
    },
    {
      imgUrl: '../../../assets/images/carousel-2.jpg',
      title: 'Book 2',
    },
    {
      imgUrl: '../../../assets/images/carousel-3.jpg',
      title: 'Book 3',
    },
    {
      imgUrl: '../../../assets/images/carousel-4.png',
      title: 'Book 4',
    },
  ];
}
 
