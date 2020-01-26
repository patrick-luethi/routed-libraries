import { async, TestBed } from '@angular/core/testing';
import { NonLazyRoutingLibModule } from './non-lazy-routing-lib.module';

describe('NonLazyRoutingLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NonLazyRoutingLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NonLazyRoutingLibModule).toBeDefined();
  });
});
