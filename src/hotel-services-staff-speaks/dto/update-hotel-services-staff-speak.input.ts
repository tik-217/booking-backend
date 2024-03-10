import { CreateHotelServicesStaffSpeakInput } from './create-hotel-services-staff-speak.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesStaffSpeakInput extends PartialType(CreateHotelServicesStaffSpeakInput) {
  @Field(() => Int)
  id: number;
}
