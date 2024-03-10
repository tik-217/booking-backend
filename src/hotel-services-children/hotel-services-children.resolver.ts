import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesChildrenService } from './hotel-services-children.service';
import { HotelServicesChildren } from './entities/hotel-services-children.entity';
import { CreateHotelServicesChildrenInput } from './dto/create-hotel-services-children.input';
import { UpdateHotelServicesChildrenInput } from './dto/update-hotel-services-children.input';

@Resolver(() => HotelServicesChildren)
export class HotelServicesChildrenResolver {
  constructor(private readonly hotelServicesChildrenService: HotelServicesChildrenService) { }

  @Mutation(() => HotelServicesChildren)
  createHotelServicesChild(@Args('createHotelServicesChildrenInput') createHotelServicesChildInput: CreateHotelServicesChildrenInput) {
    return this.hotelServicesChildrenService.create(createHotelServicesChildInput);
  }

  @Query(() => [HotelServicesChildren], { name: 'hotelServicesChildrens' })
  findAll() {
    return this.hotelServicesChildrenService.findAll();
  }

  @Query(() => HotelServicesChildren, { name: 'hotelServicesChildren' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesChildrenService.findOne(id);
  }

  @Mutation(() => HotelServicesChildren)
  updateHotelServicesChildren(@Args('updateHotelServicesChildrenInput') updateHotelServicesChildrenInput: UpdateHotelServicesChildrenInput) {
    return this.hotelServicesChildrenService.update(updateHotelServicesChildrenInput.id, updateHotelServicesChildrenInput);
  }

  @Mutation(() => HotelServicesChildren)
  removeHotelServicesChild(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesChildrenService.remove(id);
  }
}
