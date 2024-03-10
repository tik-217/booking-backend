import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesGeneralService } from './hotel-services-general.service';
import { HotelServicesGeneral } from './entities/hotel-services-general.entity';
import { CreateHotelServicesGeneralInput } from './dto/create-hotel-services-general.input';
import { UpdateHotelServicesGeneralInput } from './dto/update-hotel-services-general.input';

@Resolver(() => HotelServicesGeneral)
export class HotelServicesGeneralResolver {
  constructor(private readonly hotelServicesGeneralService: HotelServicesGeneralService) { }

  @Mutation(() => HotelServicesGeneral)
  createHotelServicesGeneral(@Args('createHotelServicesGeneralInput') createHotelServicesGeneralInput: CreateHotelServicesGeneralInput) {
    return this.hotelServicesGeneralService.create(createHotelServicesGeneralInput);
  }

  @Query(() => [HotelServicesGeneral], { name: 'hotelServicesGenerals' })
  findAll() {
    return this.hotelServicesGeneralService.findAll();
  }

  @Query(() => HotelServicesGeneral, { name: 'hotelServicesGeneral' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesGeneralService.findOne(id);
  }

  @Mutation(() => HotelServicesGeneral)
  updateHotelServicesGeneral(@Args('updateHotelServicesGeneralInput') updateHotelServicesGeneralInput: UpdateHotelServicesGeneralInput) {
    return this.hotelServicesGeneralService.update(updateHotelServicesGeneralInput.id, updateHotelServicesGeneralInput);
  }

  @Mutation(() => HotelServicesGeneral)
  removeHotelServicesGeneral(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesGeneralService.remove(id);
  }
}
