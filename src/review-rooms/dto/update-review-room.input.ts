import { CreateReviewRoomInput } from './create-review-room.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReviewRoomInput extends PartialType(CreateReviewRoomInput) {
  @Field(() => Int)
  id: number;
}
