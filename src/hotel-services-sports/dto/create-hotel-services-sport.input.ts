import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesSportInput {
  @Field(() => String)
  gym: string;

  @Field(() => String)
  image: string;
}
