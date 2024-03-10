import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesSportsResolver } from './hotel-services-sports.resolver';
import { HotelServicesSportsService } from './hotel-services-sports.service';

describe('HotelServicesSportsResolver', () => {
  let resolver: HotelServicesSportsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesSportsResolver, HotelServicesSportsService],
    }).compile();

    resolver = module.get<HotelServicesSportsResolver>(HotelServicesSportsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
