import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name = 'Angular 6';
  cards = [{ 
    title: 'Candidates', cols: 1, rows: 1, 
    number: 10
  },{ 
    title: 'Cost Models', cols: 1, rows: 1, 
    number: 56
  },
  { 
    title: 'Approved Moves', cols: 1, rows: 1, 
    number: 187
  },
  { 
    title: 'Last Week', cols: 1, rows: 1, 
    number: 34
  },
  { 
    title: 'Last Month', cols: 1, rows: 1, 
    number: 34
  },
  { 
    title: 'This Quater', cols: 1, rows: 1, 
    number: 34
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
