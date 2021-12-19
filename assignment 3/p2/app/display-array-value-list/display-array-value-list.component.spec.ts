import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArrayValueListComponent } from './display-array-value-list.component';

describe('DisplayArrayValueListComponent', () => {
  let component: DisplayArrayValueListComponent;
  let fixture: ComponentFixture<DisplayArrayValueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayArrayValueListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayArrayValueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
