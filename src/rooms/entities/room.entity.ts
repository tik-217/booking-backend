import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Room {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  cost: number;

  @Field()
  description: string;

  @Field(() => [String])
  photo: string[];

  @Field(() => Int)
  numberOfGuests: number;
}
