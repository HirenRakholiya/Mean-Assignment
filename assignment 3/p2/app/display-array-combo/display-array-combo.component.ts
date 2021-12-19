import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-array-combo',
  templateUrl: './display-array-combo.component.html',
  styleUrls: ['./display-array-combo.component.css']
})
export class DisplayArrayComboComponent implements OnInit {

  a1 = [
    'surat',
    'vapi',
    'vadodra',
    'ahemadabad'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
