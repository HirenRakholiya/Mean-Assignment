import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDateDataComponent } from './display-date-data.component';

describe('DisplayDateDataComponent', () => {
  let component: DisplayDateDataComponent;
  let fixture: ComponentFixture<DisplayDateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDateDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
