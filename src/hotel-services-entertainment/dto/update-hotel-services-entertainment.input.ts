import { CreateHotelServicesEntertainmentInput } from './create-hotel-services-entertainment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesEntertainmentInput extends PartialType(CreateHotelServicesEntertainmentInput) {
  @Field(() => Int)
  id: number;
}
