import { async, TestBed } from '@angular/core/testing';
import { LazyRoutingLibModule } from './lazy-routing-lib.module';

describe('LazyRoutingLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LazyRoutingLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LazyRoutingLibModule).toBeDefined();
  });
});
