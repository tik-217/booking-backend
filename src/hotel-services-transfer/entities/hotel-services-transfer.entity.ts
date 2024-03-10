import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesTransfer {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  transfer: string;

  @Field(() => String)
  image: string;
}
