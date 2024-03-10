import { CreateHotelServicesMealInput } from './create-hotel-services-meal.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesMealInput extends PartialType(CreateHotelServicesMealInput) {
  @Field(() => Int)
  id: number;
}
