import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesSport {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  gym: string;

  @Field(() => String)
  image: string;
}
