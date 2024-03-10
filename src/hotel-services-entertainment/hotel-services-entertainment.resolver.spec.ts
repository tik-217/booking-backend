import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesEntertainmentResolver } from './hotel-services-entertainment.resolver';
import { HotelServicesEntertainmentService } from './hotel-services-entertainment.service';

describe('HotelServicesEntertainmentResolver', () => {
  let resolver: HotelServicesEntertainmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesEntertainmentResolver, HotelServicesEntertainmentService],
    }).compile();

    resolver = module.get<HotelServicesEntertainmentResolver>(HotelServicesEntertainmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
