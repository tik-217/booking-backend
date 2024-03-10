import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesSanitaryMeasuresResolver } from './hotel-services-sanitary-measures.resolver';
import { HotelServicesSanitaryMeasuresService } from './hotel-services-sanitary-measures.service';

describe('HotelServicesSanitaryMeasuresResolver', () => {
  let resolver: HotelServicesSanitaryMeasuresResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesSanitaryMeasuresResolver, HotelServicesSanitaryMeasuresService],
    }).compile();

    resolver = module.get<HotelServicesSanitaryMeasuresResolver>(HotelServicesSanitaryMeasuresResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
