import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesBeautyAndHealthService } from './hotel-services-beauty-and-health.service';

describe('HotelServicesBeautyAndHealthService', () => {
  let service: HotelServicesBeautyAndHealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesBeautyAndHealthService],
    }).compile();

    service = module.get<HotelServicesBeautyAndHealthService>(HotelServicesBeautyAndHealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
