/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListRickService } from '../../../shared/services/list-rick.service';

describe('Service: ListRick', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListRickService]
    });
  });

  it('should ...', inject([ListRickService], (service: ListRickService) => {
    expect(service).toBeTruthy();
  }));
});
