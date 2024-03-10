import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesResolver } from './hotel-services.resolver';
import { HotelServicesService } from './hotel-services.service';

describe('HotelServicesResolver', () => {
  let resolver: HotelServicesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesResolver, HotelServicesService],
    }).compile();

    resolver = module.get<HotelServicesResolver>(HotelServicesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
