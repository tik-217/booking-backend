import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RoomService {
  @Field(() => [String])
  pool: string[];
}
