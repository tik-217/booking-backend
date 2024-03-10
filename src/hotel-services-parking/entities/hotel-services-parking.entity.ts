import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesParking {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  parkingIsPaidSeparately: string;

  @Field(() => String)
  image: string;
}
