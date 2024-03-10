import { InputType, Field, Int } from '@nestjs/graphql';

@InputType("CreateHotelServiceInput")
export class CreateHotelServiceInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  hotelId?: number;
}
