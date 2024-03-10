import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesChildrenService } from './hotel-services-children.service';

describe('HotelServicesChildrenService', () => {
  let service: HotelServicesChildrenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesChildrenService],
    }).compile();

    service = module.get<HotelServicesChildrenService>(HotelServicesChildrenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
