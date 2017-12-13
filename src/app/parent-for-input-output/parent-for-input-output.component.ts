import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-for-input-output',
  templateUrl: './parent-for-input-output.component.html',
  styleUrls: ['./parent-for-input-output.component.css']
})
export class ParentForInputOutputComponent implements OnInit {
name:String = "Rahul";
childValue:String;

  constructor() {}

  ngOnInit() {} 

  getValue(ev){
      this.childValue = ev;      
  } 

}
