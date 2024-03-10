import { Test, TestingModule } from '@nestjs/testing';
import { ReviewRoomsService } from './review-rooms.service';

describe('ReviewRoomsService', () => {
  let service: ReviewRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewRoomsService],
    }).compile();

    service = module.get<ReviewRoomsService>(ReviewRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
