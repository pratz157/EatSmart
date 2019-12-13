import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBreakfastComponent } from './order-breakfast.component';

describe('OrderBreakfastComponent', () => {
  let component: OrderBreakfastComponent;
  let fixture: ComponentFixture<OrderBreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBreakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
