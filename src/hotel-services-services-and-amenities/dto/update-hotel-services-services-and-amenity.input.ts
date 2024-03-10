import { CreateHotelServicesServicesAndAmenityInput } from './create-hotel-services-services-and-amenity.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesServicesAndAmenityInput extends PartialType(CreateHotelServicesServicesAndAmenityInput) {
  @Field(() => Int)
  id: number;
}
