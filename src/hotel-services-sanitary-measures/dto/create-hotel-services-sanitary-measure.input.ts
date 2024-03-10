import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesSanitaryMeasureInput {
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
