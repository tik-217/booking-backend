import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesInternetInput {
  @Field(() => String)
  freeWiFi: string;

  @Field(() => String)
  image: string;
}
