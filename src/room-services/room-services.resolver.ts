import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoomServicesService } from './room-services.service';
import { RoomService } from './entities/room-service.entity';
import { CreateRoomServiceInput } from './dto/create-room-service.input';
import { UpdateRoomServiceInput } from './dto/update-room-service.input';

@Resolver(() => RoomService)
export class RoomServicesResolver {
  constructor(private readonly roomServicesService: RoomServicesService) {}

  @Mutation(() => RoomService)
  createRoomService(@Args('createRoomServiceInput') createRoomServiceInput: CreateRoomServiceInput) {
    return this.roomServicesService.create(createRoomServiceInput);
  }

  @Query(() => [RoomService], { name: 'roomServices' })
  findAll() {
    return this.roomServicesService.findAll();
  }

  @Query(() => RoomService, { name: 'roomService' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.roomServicesService.findOne(id);
  }

  @Mutation(() => RoomService)
  updateRoomService(@Args('updateRoomServiceInput') updateRoomServiceInput: UpdateRoomServiceInput) {
    return this.roomServicesService.update(updateRoomServiceInput.id, updateRoomServiceInput);
  }

  @Mutation(() => RoomService)
  removeRoomService(@Args('id', { type: () => Int }) id: number) {
    return this.roomServicesService.remove(id);
  }
}
