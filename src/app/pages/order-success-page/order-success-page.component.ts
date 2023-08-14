import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success-page',
  templateUrl: './order-success-page.component.html',
  styleUrls: ['./order-success-page.component.css']
})
export class OrderSuccessPageComponent {
  constructor(private route:Router){}
  onNvaigate(){
    this.route.navigate([''])
  }
}
