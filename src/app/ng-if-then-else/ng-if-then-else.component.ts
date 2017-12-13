import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-then-else',
  templateUrl: './ng-if-then-else.component.html',
  styleUrls: ['./ng-if-then-else.component.css']
})
export class NgIfThenElseComponent implements OnInit {

  selectedValue:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeValue(){
    this.selectedValue = !this.selectedValue;
  }

}
