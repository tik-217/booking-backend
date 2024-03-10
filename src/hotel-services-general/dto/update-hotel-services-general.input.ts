import { CreateHotelServicesGeneralInput } from './create-hotel-services-general.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesGeneralInput extends PartialType(CreateHotelServicesGeneralInput) {
  @Field(() => Int)
  id: number;
}
