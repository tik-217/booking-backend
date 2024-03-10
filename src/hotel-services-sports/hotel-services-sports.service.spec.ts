import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesSportsService } from './hotel-services-sports.service';

describe('HotelServicesSportsService', () => {
  let service: HotelServicesSportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesSportsService],
    }).compile();

    service = module.get<HotelServicesSportsService>(HotelServicesSportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
