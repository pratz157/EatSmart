import { TestBed } from '@angular/core/testing';

import { OrderAndCheckoutService } from './order-and-checkout.service';

describe('OrderAndCheckoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderAndCheckoutService = TestBed.get(OrderAndCheckoutService);
    expect(service).toBeTruthy();
  });
});
