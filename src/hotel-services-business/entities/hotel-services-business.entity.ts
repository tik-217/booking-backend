import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesBusiness {
  @Field(() => Int)
  id: number;

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
