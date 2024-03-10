import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesAnimal {
  @Field(() => Int)
  id?: number;

  @Field(() => String)
  accommodationWithPetsIsPaidSeparately: string;

  @Field(() => String)
  image: string;
}