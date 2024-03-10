import { CreateHotelServicesInTheRoomInput } from './create-hotel-services-in-the-room.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesInTheRoomInput extends PartialType(CreateHotelServicesInTheRoomInput) {
  @Field(() => Int)
  id: number;
}
