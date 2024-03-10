import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoomServiceInput {
  @Field(() => [String])
  pool: string[];
}
