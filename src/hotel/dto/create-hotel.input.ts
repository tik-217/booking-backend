import { InputType, Field, Int } from '@nestjs/graphql';

@InputType("CreateHotelInput")
export class CreateHotelInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  stars: number;

  @Field(() => String)
  description: string;

  @Field(() => String)
  type: string;

  @Field({ nullable: true })
  additionalInfo?: string;

  @Field(() => [String], { nullable: true })
  photo?: string[];

  @Field(() => String)
  country: string;

  @Field({ nullable: true })
  city?: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  legalAddress: string;

  @Field(() => [String])
  policy?: string[];

  // services, path to img
}
