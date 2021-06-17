import { TestBed } from '@angular/core/testing';

import { MsgSingleProdService } from './msg-single-prod.service';

describe('MsgSingleProdService', () => {
  let service: MsgSingleProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgSingleProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
