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
      imgUrl: '../../../assets/images/carousel images/carousel-1.jpg',
      title: 'A Thousand Boy Kisses',
    },  
    {
      imgUrl: '../../../assets/images/carousel images/carousel-2.jpg',
      title: 'Divine Rivals',
    },
    {
      imgUrl: '../../../assets/images/carousel images/carousel-3.jpg',
      title: 'Baking Yesteryear : The Best Recipes from the 1900s to the 1980s',
    },
    {
      imgUrl: '../../../assets/images/carousel images/carousel-4.jpg',
      title: 'Light Bringer - A Red Rising Novel',
    },

    // {
    //   imgUrl: '../../../assets/images/carousel-3.jpg',
    //   title: 'Book 3',
    // },


  ];
}
 
