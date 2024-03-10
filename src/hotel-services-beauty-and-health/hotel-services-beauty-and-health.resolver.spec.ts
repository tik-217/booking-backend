import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesBeautyAndHealthResolver } from './hotel-services-beauty-and-health.resolver';
import { HotelServicesBeautyAndHealthService } from './hotel-services-beauty-and-health.service';

describe('HotelServicesBeautyAndHealthResolver', () => {
  let resolver: HotelServicesBeautyAndHealthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesBeautyAndHealthResolver, HotelServicesBeautyAndHealthService],
    }).compile();

    resolver = module.get<HotelServicesBeautyAndHealthResolver>(HotelServicesBeautyAndHealthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
