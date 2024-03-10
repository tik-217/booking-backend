import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesBusinessService } from './hotel-services-business.service';

describe('HotelServicesBusinessService', () => {
  let service: HotelServicesBusinessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesBusinessService],
    }).compile();

    service = module.get<HotelServicesBusinessService>(HotelServicesBusinessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
