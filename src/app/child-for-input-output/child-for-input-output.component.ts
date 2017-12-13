import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-for-input-output',
  templateUrl: './child-for-input-output.component.html',
  styleUrls: ['./child-for-input-output.component.css']
})
export class ChildForInputOutputComponent implements OnInit {
  @Input() myName;
  @Output() fromChild = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.fromChild.emit('Gupta');
  }

}
