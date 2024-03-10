import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesParkingInput {
  @Field(() => String)
  parkingIsPaidSeparately: string;

  @Field(() => String)
  image: string;
}
