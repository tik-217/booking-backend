import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReviewHotelInput {
  @Field()
  avatar: string;

  @Field()
  name: string;

  @Field(() => Int)
  rating: number;

  @Field()
  reviews: string;

  @Field()
  date: Date;

  @Field()
  country: string;
}
