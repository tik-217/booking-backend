import { CreateHotelServiceInput } from './create-hotel-service.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServiceInput extends PartialType(CreateHotelServiceInput) {
  @Field(() => Int)
  id: number;
}
