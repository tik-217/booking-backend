import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesServicesAndAmenitiesService } from './hotel-services-services-and-amenities.service';

describe('HotelServicesServicesAndAmenitiesService', () => {
  let service: HotelServicesServicesAndAmenitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesServicesAndAmenitiesService],
    }).compile();

    service = module.get<HotelServicesServicesAndAmenitiesService>(HotelServicesServicesAndAmenitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
