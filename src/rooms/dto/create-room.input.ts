import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoomInput {
  @Field()
  name: string;

  @Field(() => Int)
  cost: number;

  @Field()
  description: string;

  @Field(() => [String])
  photo: string[];

  @Field(() => Int)
  numberOfGuests: number;
}
