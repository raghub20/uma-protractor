import { inject, TestBed } from '@angular/core/testing';

import { LanguageDetectionService } from './language-detection.service';
import { RemoteLoggingService } from './remote-logging.service';

describe('LanguageDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LanguageDetectionService,
      { provide: RemoteLoggingService }
    ]
  }));

  it('should be created', inject([LanguageDetectionService], (service: LanguageDetectionService) => {
    expect(service).toBeTruthy();
  }));
});
