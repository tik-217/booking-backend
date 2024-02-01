import { Test, TestingModule } from '@nestjs/testing';
import { RoomServicesService } from './room-services.service';

describe('RoomServicesService', () => {
  let service: RoomServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomServicesService],
    }).compile();

    service = module.get<RoomServicesService>(RoomServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
