import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesBusinessInput {
  @Field(() => String)
  conferenceHall: string;

  @Field(() => String)
  xerox: string;

  @Field(() => String)
  organizationOfMeetingsAndBanquets: string;

  @Field(() => String)
  videoRentalAndComputerEquipment: string;

  @Field(() => String)
  image: string;
}
