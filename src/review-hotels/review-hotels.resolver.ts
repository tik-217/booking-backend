import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReviewHotelsService } from './review-hotels.service';
import { ReviewHotel } from './entities/review-hotel.entity';
import { CreateReviewHotelInput } from './dto/create-review-hotel.input';
import { UpdateReviewHotelInput } from './dto/update-review-hotel.input';

@Resolver(() => ReviewHotel)
export class ReviewHotelsResolver {
  constructor(private readonly reviewHotelsService: ReviewHotelsService) {}

  @Mutation(() => ReviewHotel)
  createReviewHotel(@Args('createReviewHotelInput') createReviewHotelInput: CreateReviewHotelInput) {
    return this.reviewHotelsService.create(createReviewHotelInput);
  }

  @Query(() => [ReviewHotel], { name: 'reviewHotels' })
  findAll() {
    return this.reviewHotelsService.findAll();
  }

  @Query(() => ReviewHotel, { name: 'reviewHotel' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reviewHotelsService.findOne(id);
  }

  @Mutation(() => ReviewHotel)
  updateReviewHotel(@Args('updateReviewHotelInput') updateReviewHotelInput: UpdateReviewHotelInput) {
    return this.reviewHotelsService.update(updateReviewHotelInput.id, updateReviewHotelInput);
  }

  @Mutation(() => ReviewHotel)
  removeReviewHotel(@Args('id', { type: () => Int }) id: number) {
    return this.reviewHotelsService.remove(id);
  }
}
