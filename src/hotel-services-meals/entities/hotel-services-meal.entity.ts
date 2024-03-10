import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesMeal {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  freeTeaOrCoffee: string;

  @Field(() => String)
  fullBoardIsPossible: string;

  @Field(() => String)
  halfBoardIsPossible: string;

  @Field(() => String)
  breakfastInTheRoom: string;

  @Field(() => String)
  kitchen: string;

  @Field(() => String)
  microwave: string;

  @Field(() => String)
  restaurant: string;

  @Field(() => String)
  image: string;
}
