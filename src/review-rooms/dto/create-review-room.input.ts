import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReviewRoomInput {
  @Field()
  avatar: string;

  @Field()
  name: string;

  @Field()
  date: string;

  @Field()
  country: string;

  @Field()
  reviews: string;

  @Field(() => Int)
  rating: number;
}
