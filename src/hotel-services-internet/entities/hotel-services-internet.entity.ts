import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesInternet {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  freeWiFi: string;

  @Field(() => String)
  image: string;
}
