import { Test, TestingModule } from '@nestjs/testing';
import { ReviewHotelsService } from './review-hotels.service';

describe('ReviewHotelsService', () => {
  let service: ReviewHotelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewHotelsService],
    }).compile();

    service = module.get<ReviewHotelsService>(ReviewHotelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
