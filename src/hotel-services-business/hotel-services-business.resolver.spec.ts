import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesBusinessResolver } from './hotel-services-business.resolver';
import { HotelServicesBusinessService } from './hotel-services-business.service';

describe('HotelServicesBusinessResolver', () => {
  let resolver: HotelServicesBusinessResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesBusinessResolver, HotelServicesBusinessService],
    }).compile();

    resolver = module.get<HotelServicesBusinessResolver>(HotelServicesBusinessResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
