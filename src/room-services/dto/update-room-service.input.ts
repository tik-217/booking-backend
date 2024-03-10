import { CreateRoomServiceInput } from './create-room-service.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRoomServiceInput extends PartialType(CreateRoomServiceInput) {
  @Field(() => Int)
  id: number;
}
