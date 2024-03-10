import { CreateHotelServicesChildrenInput } from "./create-hotel-services-children.input";
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesChildrenInput extends PartialType(CreateHotelServicesChildrenInput) {
  @Field(() => Int)
  id: number;
}
