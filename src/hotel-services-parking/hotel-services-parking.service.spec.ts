import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesParkingService } from './HotelServicesParkingService';

describe('HotelServicesParkingService', () => {
  let service: HotelServicesParkingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesParkingService],
    }).compile();

    service = module.get<HotelServicesParkingService>(HotelServicesParkingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
