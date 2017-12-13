import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { TestViewChildComponent } from '../test-view-child/test-view-child.component';
import { SampleDirective } from '../customDirective/sample.directive';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit,AfterViewInit {
@ViewChild(TestViewChildComponent)
 private testViewChildComponent: TestViewChildComponent;
 counter: number;

//ViewChild for template variables
@ViewChild('name')
 private elname : ElementRef;

@ViewChild('address')
 private elCity : ElementRef;

 //ViewChild for Custom directive
 @ViewChild(SampleDirective)
 private sampleDirective : SampleDirective;



  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
      this.elname.nativeElement.style.color = "red";
      this.elname.nativeElement.style.backgroundColor = "cyan";
      this.elCity.nativeElement.value = "Hyderabad";
  }

  increase(){
    this.testViewChildComponent.increment();
    this.counter= this.testViewChildComponent.count;
  }

  decrease(){
    this.testViewChildComponent.decrement();
    this.counter= this.testViewChildComponent.count;
  }

  changeColor(event){
    this.sampleDirective.change(event.target.value);
  }

}
