import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesService } from './hotel-services.service';

describe('HotelServicesService', () => {
  let service: HotelServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesService],
    }).compile();

    service = module.get<HotelServicesService>(HotelServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
