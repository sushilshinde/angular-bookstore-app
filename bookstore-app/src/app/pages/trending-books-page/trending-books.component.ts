import { Component, Input ,OnInit} from '@angular/core';
import { httpService } from 'src/app/http.service';
import { Book } from 'src/app/interface.book';
@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.css']
})
export class TrendingBooksComponent implements OnInit {
  @Input() cols!: number;
  allBooks:Book[]=[];
  constructor(private httpdata:httpService){}
 
  ngOnInit() {
    this.httpdata.onGetBooks().subscribe((resp)=>{this.allBooks=resp}
    )}
calculateDiscount(price:number,discount:number){
  const discountedPrice = price - (price *discount / 100);
  return discountedPrice;
}
getRows(){
 if( window.innerWidth>1000 ){
  return 4
 }
 else if(window.innerWidth<1000&& window.innerWidth>768){
  return 3
 }
 else if(window.innerWidth<768&& window.innerWidth>576){
  return 2
 }
 else if(window.innerWidth<576&& window.innerWidth>500){
  return 2
 }
 else{
  return 1
 }
}

}
