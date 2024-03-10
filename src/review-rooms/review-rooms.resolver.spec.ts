import { Test, TestingModule } from '@nestjs/testing';
import { ReviewRoomsResolver } from './review-rooms.resolver';
import { ReviewRoomsService } from './review-rooms.service';

describe('ReviewRoomsResolver', () => {
  let resolver: ReviewRoomsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewRoomsResolver, ReviewRoomsService],
    }).compile();

    resolver = module.get<ReviewRoomsResolver>(ReviewRoomsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
