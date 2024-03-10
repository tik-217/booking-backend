import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesStaffSpeak {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  inEnglish: string;

  @Field(() => String)
  inRussian: string;

  @Field(() => String)
  image: string;
}
