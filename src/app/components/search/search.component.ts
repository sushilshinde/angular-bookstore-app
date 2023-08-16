import { Component,HostListener,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/interface.book';
import { httpService } from 'src/app/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    private http: httpService,
    private navpage: Router
    
  ) {}
  allBooks: Book[] = [];
  title: string = '';
  category: string = '';
  cols: number = 4;
  books:any ;
  search = '';
  
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.cols = this.getRows();
  }
  
  ngOnInit() {
    this.http.onGetBooks().subscribe((resp:any) => 
    this.books = resp)
    // this.http.onGetBooks().subscribe((resp) => (this.allBooks = resp));
    this.activeRoute.params.subscribe((res)=>this.search = res['search'])
    this.searchDetail()
  }
  
  calculateDiscount(price: number, discount: number) {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  getRows() {
    if (window.innerWidth > 1000) {
      return 4;
    } else if (window.innerWidth < 1000 && window.innerWidth > 768) {
      return 3;
    } else if (window.innerWidth < 768 && window.innerWidth > 576) {
      return 2;
    } else if (window.innerWidth < 576 && window.innerWidth > 500) {
      return 2;
    } else{
      return 1;
    }
  }
  navigateToDetails(id: number) {
    this.navpage.navigate(["details",id]);
  }




  // constructor(private http:httpService){}
  // allBooks:any;
  // books:any ;
  // search = '';
  // ngOnInit(): void {
  //   this.http.onGetBooks().subscribe((res:any) => {this.allBooks = res
  //   this.books = res;
  // });
  // }
  searchDetail(){
    this.allBooks = this.books.filter((b: any) => {
      return b.title.toLowerCase().includes(this.search.toLowerCase());
      
    });
  }
}



