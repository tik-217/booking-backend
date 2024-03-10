import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewHotel {
  @Field(() => Int)
  id: number;

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
