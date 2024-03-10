import { CreateHotelServicesParkingInput } from './create-hotel-services-parking.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesParkingInput extends PartialType(CreateHotelServicesParkingInput) {
  @Field(() => Int)
  id: number;
}
