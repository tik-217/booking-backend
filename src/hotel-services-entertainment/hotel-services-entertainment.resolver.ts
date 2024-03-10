import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesEntertainmentService } from './hotel-services-entertainment.service';
import { HotelServicesEntertainment } from './entities/hotel-services-entertainment.entity';
import { CreateHotelServicesEntertainmentInput } from './dto/create-hotel-services-entertainment.input';
import { UpdateHotelServicesEntertainmentInput } from './dto/update-hotel-services-entertainment.input';

@Resolver(() => HotelServicesEntertainment)
export class HotelServicesEntertainmentResolver {
  constructor(private readonly hotelServicesEntertainmentService: HotelServicesEntertainmentService) { }

  @Mutation(() => HotelServicesEntertainment)
  createHotelServicesEntertainment(@Args('createHotelServicesEntertainmentInput') createHotelServicesEntertainmentInput: CreateHotelServicesEntertainmentInput) {
    return this.hotelServicesEntertainmentService.create(createHotelServicesEntertainmentInput);
  }

  @Query(() => [HotelServicesEntertainment], { name: 'hotelServicesEntertainments' })
  findAll() {
    return this.hotelServicesEntertainmentService.findAll();
  }

  @Query(() => HotelServicesEntertainment, { name: 'hotelServicesEntertainment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesEntertainmentService.findOne(id);
  }

  @Mutation(() => HotelServicesEntertainment)
  updateHotelServicesEntertainment(@Args('updateHotelServicesEntertainmentInput') updateHotelServicesEntertainmentInput: UpdateHotelServicesEntertainmentInput) {
    return this.hotelServicesEntertainmentService.update(updateHotelServicesEntertainmentInput.id, updateHotelServicesEntertainmentInput);
  }

  @Mutation(() => HotelServicesEntertainment)
  removeHotelServicesEntertainment(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesEntertainmentService.remove(id);
  }
}
