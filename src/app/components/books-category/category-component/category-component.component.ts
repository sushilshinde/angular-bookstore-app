//category component is used to oneway data binding and reusable components for categorys
import { AfterContentInit, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'app/interfaces/interface.book';
@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css'],
})
export class CategoryComponentComponent implements OnChanges, AfterContentInit
{
  @Input() imagesData: Book[] = [];
  @Input() title: string = '';
  @Output() eventEmit = new EventEmitter();           //declearing event emitter
  changehook = false;
  spinner = false;

  constructor (private navpage: Router)
  {
    this.spinner = true;
  }
  ngOnChanges()
  {
    this.changehook = true;
  }
  ngAfterContentInit()
  {               //lifcecycle hook aftercontentinit
    this.spinner = false;
  }

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      //getting component images corresponding widths

      {
        breakpoint: '2200',
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: '1500',
        settings: {
          slidesToShow: 5,
        },
      },
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
        breakpoint: '435',
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  calculateDiscount(price: number, discount: number)
  {
    //calculating discount
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  navigateToDetails(id: any)
  {
    //navigate to pirticular details page
    this.navpage.navigate(['details', id]);
  }
  emitEvent(price: number)
  {
    this.eventEmit.emit(price)        //emitng evevnt
  }
}
