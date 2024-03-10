import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesServicesAndAmenitiesService } from './hotel-services-services-and-amenities.service';
import { HotelServicesServicesAndAmenity } from './entities/hotel-services-services-and-amenity.entity';
import { CreateHotelServicesServicesAndAmenityInput } from './dto/create-hotel-services-services-and-amenity.input';
import { UpdateHotelServicesServicesAndAmenityInput } from './dto/update-hotel-services-services-and-amenity.input';

@Resolver(() => HotelServicesServicesAndAmenity)
export class HotelServicesServicesAndAmenitiesResolver {
  constructor(private readonly hotelServicesServicesAndAmenitiesService: HotelServicesServicesAndAmenitiesService) {}

  @Mutation(() => HotelServicesServicesAndAmenity)
  createHotelServicesServicesAndAmenity(@Args('createHotelServicesServicesAndAmenityInput') createHotelServicesServicesAndAmenityInput: CreateHotelServicesServicesAndAmenityInput) {
    return this.hotelServicesServicesAndAmenitiesService.create(createHotelServicesServicesAndAmenityInput);
  }

  @Query(() => [HotelServicesServicesAndAmenity], { name: 'hotelServicesServicesAndAmenities' })
  findAll() {
    return this.hotelServicesServicesAndAmenitiesService.findAll();
  }

  @Query(() => HotelServicesServicesAndAmenity, { name: 'hotelServicesServicesAndAmenity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesServicesAndAmenitiesService.findOne(id);
  }

  @Mutation(() => HotelServicesServicesAndAmenity)
  updateHotelServicesServicesAndAmenity(@Args('updateHotelServicesServicesAndAmenityInput') updateHotelServicesServicesAndAmenityInput: UpdateHotelServicesServicesAndAmenityInput) {
    return this.hotelServicesServicesAndAmenitiesService.update(updateHotelServicesServicesAndAmenityInput.id, updateHotelServicesServicesAndAmenityInput);
  }

  @Mutation(() => HotelServicesServicesAndAmenity)
  removeHotelServicesServicesAndAmenity(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesServicesAndAmenitiesService.remove(id);
  }
}
