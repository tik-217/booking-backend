import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewRoom {
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
