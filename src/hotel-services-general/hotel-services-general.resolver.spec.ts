import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesGeneralResolver } from './hotel-services-general.resolver';
import { HotelServicesGeneralService } from './hotel-services-general.service';

describe('HotelServicesGeneralResolver', () => {
  let resolver: HotelServicesGeneralResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesGeneralResolver, HotelServicesGeneralService],
    }).compile();

    resolver = module.get<HotelServicesGeneralResolver>(HotelServicesGeneralResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
