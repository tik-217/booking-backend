import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesServicesAndAmenityInput {
  @Field(() => String)
  ironingFacilities: string;

  @Field(() => String)
  ironingServicesArePaidSeparately: string;

  @Field(() => String)
  laundryIsPaidSeparately: string;

  @Field(() => String)
  telephone: string;

  @Field(() => String)
  conciergeServices: string;

  @Field(() => String)
  iron: string;

  @Field(() => String)
  hairDryerOnRequest: string;

  @Field(() => String)
  dryCleaningIsPaidSeparately: string;

  @Field(() => String)
  luggageStorage: string;

  @Field(() => String)
  image: string;
}
