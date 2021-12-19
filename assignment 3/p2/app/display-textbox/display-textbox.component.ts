import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-textbox',
  templateUrl: './display-textbox.component.html',
  styleUrls: ['./display-textbox.component.css']
})
export class DisplayTextboxComponent implements OnInit {

  selectedvalue1: string = "";
  a : string = "";
  tb: boolean = false;
  ta: boolean = false;
  constructor() { 
  }

  ngOnInit(): void {
  }
  getdata(event: any) {
    this.selectedvalue1 = event.target.value;
    console.log(this.selectedvalue1);
    this.a = this.selectedvalue1
    if (this.a == 'textbox') {
      this.tb = false;
      this.ta = true;
    }
    else if (this.a == 'textarea') {
      this.ta = false;
      this.tb = true;
    }
  }
}
