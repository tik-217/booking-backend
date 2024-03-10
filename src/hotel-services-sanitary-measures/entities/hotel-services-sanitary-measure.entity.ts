import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesSanitaryMeasure {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  personalProtectiveEquipmentForGuests: string;

  @Field(() => String)
  personalProtectiveEquipmentForStaff: string;

  @Field(() => String)
  temperatureControlForGuests: string;

  @Field(() => String)
  temperatureControlForStaff: string;

  @Field(() => String)
  enhancedDisinfectionMeasures: string;

  @Field(() => String)
  image: string;
}
