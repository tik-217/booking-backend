import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesMealsService } from './hotel-services-meals.service';

describe('HotelServicesMealsService', () => {
  let service: HotelServicesMealsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesMealsService],
    }).compile();

    service = module.get<HotelServicesMealsService>(HotelServicesMealsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
