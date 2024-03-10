import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesAnimalsResolver } from './hotel-services-animals.resolver';
import { HotelServicesAnimalsService } from './hotel-services-animals.service';

describe('HotelServicesAnimalsResolver', () => {
  let resolver: HotelServicesAnimalsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesAnimalsResolver, HotelServicesAnimalsService],
    }).compile();

    resolver = module.get<HotelServicesAnimalsResolver>(HotelServicesAnimalsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
