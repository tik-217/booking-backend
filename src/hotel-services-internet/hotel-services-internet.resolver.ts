import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesInternetService } from './hotel-services-internet.service';
import { HotelServicesInternet } from './entities/hotel-services-internet.entity';
import { CreateHotelServicesInternetInput } from './dto/create-hotel-services-internet.input';
import { UpdateHotelServicesInternetInput } from './dto/update-hotel-services-internet.input';

@Resolver(() => HotelServicesInternet)
export class HotelServicesInternetResolver {
  constructor(private readonly hotelServicesInternetService: HotelServicesInternetService) {}

  @Mutation(() => HotelServicesInternet)
  createHotelServicesInternet(@Args('createHotelServicesInternetInput') createHotelServicesInternetInput: CreateHotelServicesInternetInput) {
    return this.hotelServicesInternetService.create(createHotelServicesInternetInput);
  }

  @Query(() => [HotelServicesInternet], { name: 'hotelServicesInternetMany' })
  findAll() {
    return this.hotelServicesInternetService.findAll();
  }

  @Query(() => HotelServicesInternet, { name: 'hotelServicesInternet' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesInternetService.findOne(id);
  }

  @Mutation(() => HotelServicesInternet)
  updateHotelServicesInternet(@Args('updateHotelServicesInternetInput') updateHotelServicesInternetInput: UpdateHotelServicesInternetInput) {
    return this.hotelServicesInternetService.update(updateHotelServicesInternetInput.id, updateHotelServicesInternetInput);
  }

  @Mutation(() => HotelServicesInternet)
  removeHotelServicesInternet(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesInternetService.remove(id);
  }
}
