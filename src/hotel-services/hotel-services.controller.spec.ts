import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesController } from './hotel-services.controller';

describe('HotelServicesController', () => {
  let controller: HotelServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelServicesController],
    }).compile();

    controller = module.get<HotelServicesController>(HotelServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
