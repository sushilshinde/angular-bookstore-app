//category component is used to oneway data binding and reusable components for categorys
import { AfterContentInit, Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'app/interfaces/interface.book';
@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css'],
})
export class CategoryComponentComponent implements OnChanges, AfterContentInit {
  @Input() imagesData: Book[] = [];
  @Input() title: string = '';
  changehook = false;
  spinner = false;

  constructor(private navpage: Router) {
    this.spinner = true;
  }
  ngOnChanges() {
    this.changehook = true;
  }
  ngAfterContentInit() {
    this.spinner = false;
  }

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      //getting component images corresponding widths
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

  calculateDiscount(price: number, discount: number) {
    //calculating discount
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  navigateToDetails(id: number) {
    //navigate to pirticular details page
    this.navpage.navigate(['details', id]);
  }
}
