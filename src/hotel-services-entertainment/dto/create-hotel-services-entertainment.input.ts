import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesEntertainmentInput {
  @Field(() => String)
  suitableForFestiveEvents: string;

  @Field(() => String)
  image: string;
}
