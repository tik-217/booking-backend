import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesSanitaryMeasuresService } from './hotel-services-sanitary-measures.service';

describe('HotelServicesSanitaryMeasuresService', () => {
  let service: HotelServicesSanitaryMeasuresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesSanitaryMeasuresService],
    }).compile();

    service = module.get<HotelServicesSanitaryMeasuresService>(HotelServicesSanitaryMeasuresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
