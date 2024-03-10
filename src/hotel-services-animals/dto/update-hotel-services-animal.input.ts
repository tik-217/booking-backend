import { CreateHotelServicesAnimalInput } from './create-hotel-services-animal.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesAnimalInput extends PartialType(CreateHotelServicesAnimalInput) {
  @Field(() => Int)
  id: number;
}
