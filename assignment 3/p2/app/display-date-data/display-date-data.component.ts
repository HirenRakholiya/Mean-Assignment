import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-date-data',
  templateUrl: './display-date-data.component.html',
  styleUrls: ['./display-date-data.component.css']
})
export class DisplayDateDataComponent implements OnInit {
  a : any;
  data : string;
  datedata : Date;
  constructor() {
    this.a = 10;
    this.data = 'Hello';
    this.datedata = new Date();
   }

  ngOnInit(): void {
  }

}
