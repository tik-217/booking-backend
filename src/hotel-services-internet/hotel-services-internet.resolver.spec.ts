import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesInternetResolver } from './hotel-services-internet.resolver';
import { HotelServicesInternetService } from './hotel-services-internet.service';

describe('HotelServicesInternetResolver', () => {
  let resolver: HotelServicesInternetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesInternetResolver, HotelServicesInternetService],
    }).compile();

    resolver = module.get<HotelServicesInternetResolver>(HotelServicesInternetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
