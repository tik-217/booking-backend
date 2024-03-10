import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesTransferService } from './hotel-services-transfer.service';
import { HotelServicesTransfer } from './entities/hotel-services-transfer.entity';
import { CreateHotelServicesTransferInput } from './dto/create-hotel-services-transfer.input';
import { UpdateHotelServicesTransferInput } from './dto/update-hotel-services-transfer.input';

@Resolver(() => HotelServicesTransfer)
export class HotelServicesTransferResolver {
  constructor(private readonly hotelServicesTransferService: HotelServicesTransferService) {}

  @Mutation(() => HotelServicesTransfer)
  createHotelServicesTransfer(@Args('createHotelServicesTransferInput') createHotelServicesTransferInput: CreateHotelServicesTransferInput) {
    return this.hotelServicesTransferService.create(createHotelServicesTransferInput);
  }

  @Query(() => [HotelServicesTransfer], { name: 'hotelServicesTransferMany' })
  findAll() {
    return this.hotelServicesTransferService.findAll();
  }

  @Query(() => HotelServicesTransfer, { name: 'hotelServicesTransfer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesTransferService.findOne(id);
  }

  @Mutation(() => HotelServicesTransfer)
  updateHotelServicesTransfer(@Args('updateHotelServicesTransferInput') updateHotelServicesTransferInput: UpdateHotelServicesTransferInput) {
    return this.hotelServicesTransferService.update(updateHotelServicesTransferInput.id, updateHotelServicesTransferInput);
  }

  @Mutation(() => HotelServicesTransfer)
  removeHotelServicesTransfer(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesTransferService.remove(id);
  }
}
