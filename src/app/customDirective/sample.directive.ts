import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[redColor]'
})
export class SampleDirective {

  constructor(private ele:ElementRef) {  
      ele.nativeElement.style.color = "red";  
   }

   @HostListener('click') doSomething(){
    alert('It works !!');
  }

  change(changedColor:string){
    this.ele.nativeElement.style.color = changedColor;
  }
}
