import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesInTheRoom {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  vipAmenitiesInTheRoom: string;

  @Field(() => String)
  cableTv: string;

  @Field(() => String)
  bridalSuite: string;

  @Field(() => String)
  musicCenter: string;

  @Field(() => String)
  roomsForAllergySufferers: string;

  @Field(() => String)
  smokingRooms: string;

  @Field(() => String)
  nonSmokingRooms: string;

  @Field(() => String)
  roomService: string;

  @Field(() => String)
  safeInTheRoom: string;

  @Field(() => String)
  familyRooms: string;

  @Field(() => String)
  tv: string;

  @Field(() => String)
  refrigerator: string;

  @Field(() => String)
  image: string;
}
