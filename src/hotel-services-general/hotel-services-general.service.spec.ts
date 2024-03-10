import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesGeneralService } from './hotel-services-general.service';

describe('HotelServicesGeneralService', () => {
  let service: HotelServicesGeneralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesGeneralService],
    }).compile();

    service = module.get<HotelServicesGeneralService>(HotelServicesGeneralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
