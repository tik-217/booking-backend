import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesTransferResolver } from './hotel-services-transfer.resolver';
import { HotelServicesTransferService } from './hotel-services-transfer.service';

describe('HotelServicesTransferResolver', () => {
  let resolver: HotelServicesTransferResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesTransferResolver, HotelServicesTransferService],
    }).compile();

    resolver = module.get<HotelServicesTransferResolver>(HotelServicesTransferResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
