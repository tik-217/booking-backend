import { CreateHotelServicesBusinessInput } from './create-hotel-services-business.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesBusinessInput extends PartialType(CreateHotelServicesBusinessInput) {
  @Field(() => Int)
  id: number;
}
