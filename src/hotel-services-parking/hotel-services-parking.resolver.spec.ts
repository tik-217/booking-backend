import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesParkingResolver } from './hotel-services-parking.resolver';
import { HotelServicesParkingService } from './HotelServicesParkingService';

describe('HotelServicesParkingResolver', () => {
  let resolver: HotelServicesParkingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesParkingResolver, HotelServicesParkingService],
    }).compile();

    resolver = module.get<HotelServicesParkingResolver>(HotelServicesParkingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
