import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesEntertainment {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  suitableForFestiveEvents: string;

  @Field(() => String)
  image: string;
}
