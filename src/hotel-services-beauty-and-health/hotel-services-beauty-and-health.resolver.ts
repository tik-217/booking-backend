import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesBeautyAndHealthService } from './hotel-services-beauty-and-health.service';
import { HotelServicesBeautyAndHealth } from './entities/hotel-services-beauty-and-health.entity';
import { CreateHotelServicesBeautyAndHealthInput } from './dto/create-hotel-services-beauty-and-health.input';
import { UpdateHotelServicesBeautyAndHealthInput } from './dto/update-hotel-services-beauty-and-health.input';

@Resolver(() => HotelServicesBeautyAndHealth)
export class HotelServicesBeautyAndHealthResolver {
  constructor(private readonly hotelServicesBeautyAndHealthService: HotelServicesBeautyAndHealthService) {}

  @Mutation(() => HotelServicesBeautyAndHealth)
  createHotelServicesBeautyAndHealth(@Args('createHotelServicesBeautyAndHealthInput') createHotelServicesBeautyAndHealthInput: CreateHotelServicesBeautyAndHealthInput) {
    return this.hotelServicesBeautyAndHealthService.create(createHotelServicesBeautyAndHealthInput);
  }

  @Query(() => [HotelServicesBeautyAndHealth], { name: 'hotelServicesBeautyAndHealthMany' })
  findAll() {
    return this.hotelServicesBeautyAndHealthService.findAll();
  }

  @Query(() => HotelServicesBeautyAndHealth, { name: 'hotelServicesBeautyAndHealth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesBeautyAndHealthService.findOne(id);
  }

  @Mutation(() => HotelServicesBeautyAndHealth)
  updateHotelServicesBeautyAndHealth(@Args('updateHotelServicesBeautyAndHealthInput') updateHotelServicesBeautyAndHealthInput: UpdateHotelServicesBeautyAndHealthInput) {
    return this.hotelServicesBeautyAndHealthService.update(updateHotelServicesBeautyAndHealthInput.id, updateHotelServicesBeautyAndHealthInput);
  }

  @Mutation(() => HotelServicesBeautyAndHealth)
  removeHotelServicesBeautyAndHealth(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesBeautyAndHealthService.remove(id);
  }
}
