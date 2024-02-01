import { Test, TestingModule } from '@nestjs/testing';
import { RoomServicesController } from './room-services.controller';

describe('RoomServicesController', () => {
  let controller: RoomServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomServicesController],
    }).compile();

    controller = module.get<RoomServicesController>(RoomServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
