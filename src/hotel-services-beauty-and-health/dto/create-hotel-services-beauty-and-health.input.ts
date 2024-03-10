import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesBeautyAndHealthInput {
  @Field(() => String)
  firstAidKit: string;

  @Field(() => String)
  massageIsPaidSeparately: string;

  @Field(() => String)
  beautySalonIsPaidSeparately: string;

  @Field(() => String)
  image: string;
}
