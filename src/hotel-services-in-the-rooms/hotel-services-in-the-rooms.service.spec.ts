import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesInTheRoomsService } from './hotel-services-in-the-rooms.service';

describe('HotelServicesInTheRoomsService', () => {
  let service: HotelServicesInTheRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesInTheRoomsService],
    }).compile();

    service = module.get<HotelServicesInTheRoomsService>(HotelServicesInTheRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
