import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesEntertainmentService } from './hotel-services-entertainment.service';

describe('HotelServicesEntertainmentService', () => {
  let service: HotelServicesEntertainmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesEntertainmentService],
    }).compile();

    service = module.get<HotelServicesEntertainmentService>(HotelServicesEntertainmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
