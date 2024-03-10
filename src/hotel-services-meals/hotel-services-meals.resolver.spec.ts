import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesMealsResolver } from './hotel-services-meals.resolver';
import { HotelServicesMealsService } from './hotel-services-meals.service';

describe('HotelServicesMealsResolver', () => {
  let resolver: HotelServicesMealsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesMealsResolver, HotelServicesMealsService],
    }).compile();

    resolver = module.get<HotelServicesMealsResolver>(HotelServicesMealsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
