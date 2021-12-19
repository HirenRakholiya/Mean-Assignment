import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  data: any;
  userform: FormGroup;
  a1 = [
    'surat',
    'vapi',
    'vadodra',
    'ahemadabad'
  ]
  constructor(private fb: FormBuilder) {
    this.userform = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      mobileno: ['', Validators.required],
      city: ['select city']
    });
  }

  ngOnInit(): void {
  }
  userformdata() {
    this.data = this.userform.value;
  }
}
