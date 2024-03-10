import { CreateHotelServicesSportInput } from './create-hotel-services-sport.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesSportInput extends PartialType(CreateHotelServicesSportInput) {
  @Field(() => Int)
  id: number;
}
