import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReviewRoomsService } from './review-rooms.service';
import { ReviewRoom } from './entities/review-room.entity';
import { CreateReviewRoomInput } from './dto/create-review-room.input';
import { UpdateReviewRoomInput } from './dto/update-review-room.input';

@Resolver(() => ReviewRoom)
export class ReviewRoomsResolver {
  constructor(private readonly reviewRoomsService: ReviewRoomsService) {}

  @Mutation(() => ReviewRoom)
  createReviewRoom(@Args('createReviewRoomInput') createReviewRoomInput: CreateReviewRoomInput) {
    return this.reviewRoomsService.create(createReviewRoomInput);
  }

  @Query(() => [ReviewRoom], { name: 'reviewRooms' })
  findAll() {
    return this.reviewRoomsService.findAll();
  }

  @Query(() => ReviewRoom, { name: 'reviewRoom' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reviewRoomsService.findOne(id);
  }

  @Mutation(() => ReviewRoom)
  updateReviewRoom(@Args('updateReviewRoomInput') updateReviewRoomInput: UpdateReviewRoomInput) {
    return this.reviewRoomsService.update(updateReviewRoomInput.id, updateReviewRoomInput);
  }

  @Mutation(() => ReviewRoom)
  removeReviewRoom(@Args('id', { type: () => Int }) id: number) {
    return this.reviewRoomsService.remove(id);
  }
}



