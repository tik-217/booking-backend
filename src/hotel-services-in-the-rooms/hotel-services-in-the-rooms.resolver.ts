import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesInTheRoomsService } from './hotel-services-in-the-rooms.service';
import { HotelServicesInTheRoom } from './entities/hotel-services-in-the-room.entity';
import { CreateHotelServicesInTheRoomInput } from './dto/create-hotel-services-in-the-room.input';
import { UpdateHotelServicesInTheRoomInput } from './dto/update-hotel-services-in-the-room.input';

@Resolver(() => HotelServicesInTheRoom)
export class HotelServicesInTheRoomsResolver {
  constructor(private readonly hotelServicesInTheRoomsService: HotelServicesInTheRoomsService) {}

  @Mutation(() => HotelServicesInTheRoom)
  createHotelServicesInTheRoom(@Args('createHotelServicesInTheRoomInput') createHotelServicesInTheRoomInput: CreateHotelServicesInTheRoomInput) {
    return this.hotelServicesInTheRoomsService.create(createHotelServicesInTheRoomInput);
  }

  @Query(() => [HotelServicesInTheRoom], { name: 'hotelServicesInTheRooms' })
  findAll() {
    return this.hotelServicesInTheRoomsService.findAll();
  }

  @Query(() => HotelServicesInTheRoom, { name: 'hotelServicesInTheRoom' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesInTheRoomsService.findOne(id);
  }

  @Mutation(() => HotelServicesInTheRoom)
  updateHotelServicesInTheRoom(@Args('updateHotelServicesInTheRoomInput') updateHotelServicesInTheRoomInput: UpdateHotelServicesInTheRoomInput) {
    return this.hotelServicesInTheRoomsService.update(updateHotelServicesInTheRoomInput.id, updateHotelServicesInTheRoomInput);
  }

  @Mutation(() => HotelServicesInTheRoom)
  removeHotelServicesInTheRoom(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesInTheRoomsService.remove(id);
  }
}
