import { CreateReviewHotelInput } from './create-review-hotel.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReviewHotelInput extends PartialType(CreateReviewHotelInput) {
  @Field(() => Int)
  id: number;
}
