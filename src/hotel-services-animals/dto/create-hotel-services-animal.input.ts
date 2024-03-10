import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesAnimalInput {
  @Field(() => String)
  accommodationWithPetsIsPaidSeparately: string;

  @Field(() => String)
  image: string;
}
