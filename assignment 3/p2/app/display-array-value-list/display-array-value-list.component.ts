import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-array-value-list',
  templateUrl: './display-array-value-list.component.html',
  styleUrls: ['./display-array-value-list.component.css']
})
export class DisplayArrayValueListComponent implements OnInit {

  a1 = [1,2,3,4];
  a2 = ['a','b','c'];
  a3 = [
    {
      name:'hiren',
      age:21
    },
    {
      name:'jay',
      age:'20'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
