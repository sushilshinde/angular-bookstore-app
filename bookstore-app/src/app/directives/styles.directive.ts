import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyles]'
})
export class StylesDirective
{
  constructor (private el: ElementRef)
  {
    this.el.nativeElement.style.backgroundColor = '#b9dfb9';
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.width = "40vw";
    this.el.nativeElement.style.height = "200px";
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


