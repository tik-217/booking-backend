import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesSportsService } from './hotel-services-sports.service';
import { HotelServicesSport } from './entities/hotel-services-sport.entity';
import { CreateHotelServicesSportInput } from './dto/create-hotel-services-sport.input';
import { UpdateHotelServicesSportInput } from './dto/update-hotel-services-sport.input';

@Resolver(() => HotelServicesSport)
export class HotelServicesSportsResolver {
  constructor(private readonly hotelServicesSportsService: HotelServicesSportsService) {}

  @Mutation(() => HotelServicesSport)
  createHotelServicesSport(@Args('createHotelServicesSportInput') createHotelServicesSportInput: CreateHotelServicesSportInput) {
    return this.hotelServicesSportsService.create(createHotelServicesSportInput);
  }

  @Query(() => [HotelServicesSport], { name: 'hotelServicesSports' })
  findAll() {
    return this.hotelServicesSportsService.findAll();
  }

  @Query(() => HotelServicesSport, { name: 'hotelServicesSport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesSportsService.findOne(id);
  }

  @Mutation(() => HotelServicesSport)
  updateHotelServicesSport(@Args('updateHotelServicesSportInput') updateHotelServicesSportInput: UpdateHotelServicesSportInput) {
    return this.hotelServicesSportsService.update(updateHotelServicesSportInput.id, updateHotelServicesSportInput);
  }

  @Mutation(() => HotelServicesSport)
  removeHotelServicesSport(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesSportsService.remove(id);
  }
}
