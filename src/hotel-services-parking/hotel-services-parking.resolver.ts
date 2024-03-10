import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesParking } from './entities/hotel-services-parking.entity';
import { CreateHotelServicesParkingInput } from './dto/create-hotel-services-parking.input';
import { UpdateHotelServicesParkingInput } from './dto/update-hotel-services-parking.input';
import { HotelServicesParkingService } from './hotel-services-parking.service';

@Resolver(() => HotelServicesParking)
export class HotelServicesParkingResolver {
  constructor(private readonly hotelServicesParkingService: HotelServicesParkingService) { }

  @Mutation(() => HotelServicesParking)
  createHotelServicesParking(@Args('createHotelServicesParkingInput') createHotelServicesParkingInput: CreateHotelServicesParkingInput) {
    return this.hotelServicesParkingService.create(createHotelServicesParkingInput);
  }

  @Query(() => [HotelServicesParking], { name: 'hotelServicesParkingMany' })
  findAll() {
    return this.hotelServicesParkingService.findAll();
  }

  @Query(() => HotelServicesParking, { name: 'hotelServicesParking' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesParkingService.findOne(id);
  }

  @Mutation(() => HotelServicesParking)
  updateHotelServicesParking(@Args('updateHotelServicesParkingInput') updateHotelServicesParkingInput: UpdateHotelServicesParkingInput) {
    return this.hotelServicesParkingService.update(updateHotelServicesParkingInput.id, updateHotelServicesParkingInput);
  }

  @Mutation(() => HotelServicesParking)
  removeHotelServicesParking(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesParkingService.remove(id);
  }
}
