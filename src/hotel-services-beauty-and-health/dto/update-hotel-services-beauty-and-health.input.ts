import { CreateHotelServicesBeautyAndHealthInput } from './create-hotel-services-beauty-and-health.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesBeautyAndHealthInput extends PartialType(CreateHotelServicesBeautyAndHealthInput) {
  @Field(() => Int)
  id: number;
}
