import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesStaffSpeaksResolver } from './hotel-services-staff-speaks.resolver';
import { HotelServicesStaffSpeaksService } from './hotel-services-staff-speaks.service';

describe('HotelServicesStaffSpeaksResolver', () => {
  let resolver: HotelServicesStaffSpeaksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesStaffSpeaksResolver, HotelServicesStaffSpeaksService],
    }).compile();

    resolver = module.get<HotelServicesStaffSpeaksResolver>(HotelServicesStaffSpeaksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
