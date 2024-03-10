import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesAnimalsService } from './hotel-services-animals.service';

describe('HotelServicesAnimalsService', () => {
  let service: HotelServicesAnimalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesAnimalsService],
    }).compile();

    service = module.get<HotelServicesAnimalsService>(HotelServicesAnimalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
