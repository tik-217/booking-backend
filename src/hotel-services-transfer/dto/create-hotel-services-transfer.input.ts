import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesTransferInput {
  @Field(() => String)
  transfer: string;

  @Field(() => String)
  image: string;
}
