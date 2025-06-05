import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
  standalone: true
})
export class Renklendir {

  @Input("renklendir") color: string | undefined;
  @Input("test") name: string | undefined;
  private originalContent: string = "";

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.originalContent = this.el.nativeElement.innerHTML;
  }

  @HostListener("mouseenter") method1(){
    console.log(this.color);
    console.log(this.name);
    this.el.nativeElement.style = "color:red";
    this.el.nativeElement.innerHTML = this.name;
    console.log("Mouse elementin üzerine geldi");
  }

  @HostListener("mouseleave") method2(){
    this.el.nativeElement.style = "color:black";
    this.el.nativeElement.innerHTML = this.originalContent;
    console.log("Mouse elementin üzerine ayrıldı");
  }

}
