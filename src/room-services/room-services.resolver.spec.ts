import { Test, TestingModule } from '@nestjs/testing';
import { RoomServicesResolver } from './room-services.resolver';
import { RoomServicesService } from './room-services.service';

describe('RoomServicesResolver', () => {
  let resolver: RoomServicesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomServicesResolver, RoomServicesService],
    }).compile();

    resolver = module.get<RoomServicesResolver>(RoomServicesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
