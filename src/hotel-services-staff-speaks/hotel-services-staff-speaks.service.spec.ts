import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesStaffSpeaksService } from './hotel-services-staff-speaks.service';

describe('HotelServicesStaffSpeaksService', () => {
  let service: HotelServicesStaffSpeaksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesStaffSpeaksService],
    }).compile();

    service = module.get<HotelServicesStaffSpeaksService>(HotelServicesStaffSpeaksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
