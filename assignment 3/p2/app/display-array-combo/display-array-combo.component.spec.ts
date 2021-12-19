import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArrayComboComponent } from './display-array-combo.component';

describe('DisplayArrayComboComponent', () => {
  let component: DisplayArrayComboComponent;
  let fixture: ComponentFixture<DisplayArrayComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayArrayComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayArrayComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
