import { CreateHotelServicesTransferInput } from './create-hotel-services-transfer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesTransferInput extends PartialType(CreateHotelServicesTransferInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  image: string;
}
