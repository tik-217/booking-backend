import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesMealInput {
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
