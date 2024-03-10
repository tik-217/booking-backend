import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesBeautyAndHealth {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  firstAidKit: string;

  @Field(() => String)
  massageIsPaidSeparately: string;

  @Field(() => String)
  beautySalonIsPaidSeparately: string;

  @Field(() => String)
  image: string;
}
