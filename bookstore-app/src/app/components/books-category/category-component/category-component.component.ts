import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interface.book';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css'],
})
export class CategoryComponentComponent {
  @Input() imagesData!:Book[];
  @Input() title!:string;
//   slides!:any;
// ngOnInit(){
//   this.slides =this.imagesData;
//   console.log(this.slides)
// }
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: '922',
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: '768',
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: '576',
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: '400',
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  calculateDiscount(price:number,discount:number){
    const discountedPrice = price - (price *discount / 100);
    return discountedPrice;
  }
}
