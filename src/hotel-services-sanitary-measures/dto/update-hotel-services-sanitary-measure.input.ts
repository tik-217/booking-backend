import { CreateHotelServicesSanitaryMeasureInput } from './create-hotel-services-sanitary-measure.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHotelServicesSanitaryMeasureInput extends PartialType(CreateHotelServicesSanitaryMeasureInput) {
  @Field(() => Int)
  id: number;
}
