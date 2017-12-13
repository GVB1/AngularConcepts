import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.css']
})
export class TestViewChildComponent implements OnInit {
  count:number=0;
  
  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.count = this.count + 1;
  }

  decrement(){
    this.count = this.count - 1;
  }

}
