import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesTransferService } from './hotel-services-transfer.service';

describe('HotelServicesTransferService', () => {
  let service: HotelServicesTransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesTransferService],
    }).compile();

    service = module.get<HotelServicesTransferService>(HotelServicesTransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
