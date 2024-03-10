import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesServicesAndAmenitiesResolver } from './hotel-services-services-and-amenities.resolver';
import { HotelServicesServicesAndAmenitiesService } from './hotel-services-services-and-amenities.service';

describe('HotelServicesServicesAndAmenitiesResolver', () => {
  let resolver: HotelServicesServicesAndAmenitiesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesServicesAndAmenitiesResolver, HotelServicesServicesAndAmenitiesService],
    }).compile();

    resolver = module.get<HotelServicesServicesAndAmenitiesResolver>(HotelServicesServicesAndAmenitiesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
