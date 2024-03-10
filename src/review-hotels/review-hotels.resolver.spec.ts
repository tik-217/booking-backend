import { Test, TestingModule } from '@nestjs/testing';
import { ReviewHotelsResolver } from './review-hotels.resolver';
import { ReviewHotelsService } from './review-hotels.service';

describe('ReviewHotelsResolver', () => {
  let resolver: ReviewHotelsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewHotelsResolver, ReviewHotelsService],
    }).compile();

    resolver = module.get<ReviewHotelsResolver>(ReviewHotelsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
