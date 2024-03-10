import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesInternetService } from './hotel-services-internet.service';

describe('HotelServicesInternetService', () => {
  let service: HotelServicesInternetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesInternetService],
    }).compile();

    service = module.get<HotelServicesInternetService>(HotelServicesInternetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
