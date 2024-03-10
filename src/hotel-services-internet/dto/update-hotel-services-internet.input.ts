import { CreateHotelServicesInternetInput } from './create-hotel-services-internet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesInternetInput extends PartialType(CreateHotelServicesInternetInput) {
  @Field(() => Int)
  id: number;
}
