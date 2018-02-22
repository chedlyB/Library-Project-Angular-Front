import { TestBed, inject } from '@angular/core/testing';

import { SearchBookService } from './search-book.service';

describe('SearchBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBookService]
    });
  });

  it('should be created', inject([SearchBookService], (service: SearchBookService) => {
    expect(service).toBeTruthy();
  }));
});
