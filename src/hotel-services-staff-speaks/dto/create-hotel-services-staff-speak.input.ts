import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesStaffSpeakInput {
  @Field(() => String)
  inEnglish: string;

  @Field(() => String)
  inRussian: string;

  @Field(() => String)
  image: string;
}
