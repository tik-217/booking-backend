import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesInTheRoomsResolver } from './hotel-services-in-the-rooms.resolver';
import { HotelServicesInTheRoomsService } from './hotel-services-in-the-rooms.service';

describe('HotelServicesInTheRoomsResolver', () => {
  let resolver: HotelServicesInTheRoomsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesInTheRoomsResolver, HotelServicesInTheRoomsService],
    }).compile();

    resolver = module.get<HotelServicesInTheRoomsResolver>(HotelServicesInTheRoomsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
