import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authetificationGuard } from './authetification.guard';

describe('authetificationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authetificationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
