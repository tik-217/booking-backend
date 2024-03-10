import { Test, TestingModule } from '@nestjs/testing';
import { HotelServicesChildrenResolver } from './hotel-services-children.resolver';
import { HotelServicesChildrenService } from './hotel-services-children.service';

describe('HotelServicesChildrenResolver', () => {
  let resolver: HotelServicesChildrenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelServicesChildrenResolver, HotelServicesChildrenService],
    }).compile();

    resolver = module.get<HotelServicesChildrenResolver>(HotelServicesChildrenResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
