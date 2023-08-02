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
      imgUrl: 'https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/230703_AThousandBoyKisses_1200x440_v2.jpg',
      title: 'A Thousand Boy Kisses',
    },  
    {
      imgUrl: 'https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/230628_DivineRivals_1200x440_v1-1.jpg',
      title: 'Divine Rivals',
    },
    {
      imgUrl: 'https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/230713_BakingYesteryear_1200x440_v2.jpg',
      title: 'Baking Yesteryear : The Best Recipes from the 1900s to the 1980s',
    },
    {
      imgUrl: 'https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/230717_LightBringer_1200x440.jpg',
      title: 'Light Bringer - A Red Rising Novel',
    },

    // {
    //   imgUrl: '../../../assets/images/carousel-3.jpg',
    //   title: 'Book 3',
    // },


  ];
}
 
