import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesBusinessService } from './hotel-services-business.service';
import { HotelServicesBusiness } from './entities/hotel-services-business.entity';
import { CreateHotelServicesBusinessInput } from './dto/create-hotel-services-business.input';
import { UpdateHotelServicesBusinessInput } from './dto/update-hotel-services-business.input';

@Resolver(() => HotelServicesBusiness)
export class HotelServicesBusinessResolver {
  constructor(private readonly hotelServicesBusinessService: HotelServicesBusinessService) {}

  @Mutation(() => HotelServicesBusiness)
  createHotelServicesBusiness(@Args('createHotelServicesBusinessInput') createHotelServicesBusinessInput: CreateHotelServicesBusinessInput) {
    return this.hotelServicesBusinessService.create(createHotelServicesBusinessInput);
  }

  @Query(() => [HotelServicesBusiness], { name: 'hotelServicesBusinessMany' })
  findAll() {
    return this.hotelServicesBusinessService.findAll();
  }

  @Query(() => HotelServicesBusiness, { name: 'hotelServicesBusiness' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesBusinessService.findOne(id);
  }

  @Mutation(() => HotelServicesBusiness)
  updateHotelServicesBusiness(@Args('updateHotelServicesBusinessInput') updateHotelServicesBusinessInput: UpdateHotelServicesBusinessInput) {
    return this.hotelServicesBusinessService.update(updateHotelServicesBusinessInput.id, updateHotelServicesBusinessInput);
  }

  @Mutation(() => HotelServicesBusiness)
  removeHotelServicesBusiness(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesBusinessService.remove(id);
  }
}
