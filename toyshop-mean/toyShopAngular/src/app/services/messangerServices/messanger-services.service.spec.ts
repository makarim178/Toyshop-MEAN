import { TestBed } from '@angular/core/testing';

import { MessangerServicesService } from './messanger-services.service';

describe('MessangerServicesService', () => {
  let service: MessangerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessangerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
