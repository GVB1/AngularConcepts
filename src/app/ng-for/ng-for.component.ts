import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  employees:any=[{name:'Rahul',address:'Gachibowli'},
  {name:'Hasnain',address:'Lakdi Ka Pool'},
  {name:'Hamza',address:'Khairatabad'},
  {name:'Soni',address:'Begumpet'},  
  {name:'Akansha',address:'Anand Nagar'}];

  constructor() { }

  ngOnInit() {
  }

}
