//this directive is usee to center the elements with blackground color and border radious
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrorStyles]'
})
export class ErrorStylesDirective
{
  constructor (private el: ElementRef)  //using element reference for updating css
  {
    this.el.nativeElement.style.backgroundColor = '#03d2f733';
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.display = "flex";
    this.el.nativeElement.style.flexDirection = "column";
    this.el.nativeElement.style.justifyContent = "center";
    this.el.nativeElement.style.alignItems = "center";
    this.el.nativeElement.style.border = "2px";
    this.el.nativeElement.style.borderColor = "rgb(241, 243, 245)";
    this.el.nativeElement.style.borderStyle = "solid";
    this.el.nativeElement.style.borderRadius = "10px";
    this.el.nativeElement.style.padding = "15px";
    this.el.nativeElement.style.textAlign = "center";
    this.el.nativeElement.style.textDecoration = "none";

  }

}



