// nest
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

// service
import { HotelServicesService } from './hotel-services.service';

// entity
import HotelServiceEntity from 'src/hotel-services/entities/hotel-service.entity';

// dto
import { CreateHotelServiceInput } from './dto/create-hotel-service.input';
import { UpdateHotelServiceInput } from './dto/update-hotel-service.input';

@Resolver(() => HotelServiceEntity)
export class HotelServicesResolver {
  constructor(private readonly hotelServicesService: HotelServicesService) { }

  @Mutation(() => HotelServiceEntity)
  createHotelService(@Args('createHotelServiceInput') createHotelServiceInput: CreateHotelServiceInput) {
    return this.hotelServicesService.create(createHotelServiceInput);
  }

  @Query(() => [HotelServiceEntity], { name: 'hotelServices' })
  findAll() {
    return this.hotelServicesService.findAll();
  }

  @Query(() => HotelServiceEntity, { name: 'hotelService' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesService.findOne(id);
  }

  @Mutation(() => HotelServiceEntity)
  updateHotelService(@Args('updateHotelServiceInput') updateHotelServiceInput: UpdateHotelServiceInput) {
    return this.hotelServicesService.update(updateHotelServiceInput.id, updateHotelServiceInput);
  }

  @Mutation(() => HotelServiceEntity)
  removeHotelService(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesService.remove(id);
  }
}
