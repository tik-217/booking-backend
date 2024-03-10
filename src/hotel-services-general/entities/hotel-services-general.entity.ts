import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesGeneral {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  designHotel: string;

  @Field(() => String)
  individualCheckInAndCheckOut: string;

  @Field(() => String)
  computer: string;

  @Field(() => String)
  airConditioning: string;

  @Field(() => String)
  fullDayHourFrontDesk: string;

  @Field(() => String)
  elevator: string;

  @Field(() => String)
  fireExtinguisher: string;

  @Field(() => String)
  nonSmokingHotel: string;

  @Field(() => String)
  heating: string;

  @Field(() => String)
  lateCheckOut: string;

  @Field(() => String)
  dishwasherCar: string;

  @Field(() => String)
  earlyCheckIn: string;

  @Field(() => String)
  washingMachine: string;

  @Field(() => String)
  expeditedCheckInAndCheckOut: string;

  @Field(() => String)
  image: string;
}
