//this directive is usee to center the elements with blackground color and border radious
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyles]'
})
export class StylesDirective
{
  constructor (private el: ElementRef)  //using element reference for updating css
  {
    this.el.nativeElement.style.backgroundColor = '#b9dfb9';
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.display = "flex";
    this.el.nativeElement.style.flexDirection = "column";
    this.el.nativeElement.style.justifyContent = "center";
    this.el.nativeElement.style.alignItems = "center";
    this.el.nativeElement.style.border = "2px";
    this.el.nativeElement.style.borderColor = "#b9dfb9";
    this.el.nativeElement.style.borderStyle = "solid";
    this.el.nativeElement.style.borderRadius = "10px";
    this.el.nativeElement.style.padding = "10px";
    this.el.nativeElement.style.textAlign = "center";

  }

}


