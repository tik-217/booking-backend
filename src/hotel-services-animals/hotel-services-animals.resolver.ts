import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesAnimalsService } from './hotel-services-animals.service';
import { HotelServicesAnimal } from './entities/hotel-services-animal.entity';
import { CreateHotelServicesAnimalInput } from './dto/create-hotel-services-animal.input';
import { UpdateHotelServicesAnimalInput } from './dto/update-hotel-services-animal.input';

@Resolver(() => HotelServicesAnimal)
export class HotelServicesAnimalsResolver {
  constructor(private readonly hotelServicesAnimalsService: HotelServicesAnimalsService) {}

  @Mutation(() => HotelServicesAnimal)
  createHotelServicesAnimal(@Args('createHotelServicesAnimalInput') createHotelServicesAnimalInput: CreateHotelServicesAnimalInput) {
    return this.hotelServicesAnimalsService.create(createHotelServicesAnimalInput);
  }

  @Query(() => [HotelServicesAnimal], { name: 'hotelServicesAnimals' })
  findAll() {
    return this.hotelServicesAnimalsService.findAll();
  }

  @Query(() => HotelServicesAnimal, { name: 'hotelServicesAnimal' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesAnimalsService.findOne(id);
  }

  @Mutation(() => HotelServicesAnimal)
  updateHotelServicesAnimal(@Args('updateHotelServicesAnimalInput') updateHotelServicesAnimalInput: UpdateHotelServicesAnimalInput) {
    return this.hotelServicesAnimalsService.update(updateHotelServicesAnimalInput.id, updateHotelServicesAnimalInput);
  }

  @Mutation(() => HotelServicesAnimal)
  removeHotelServicesAnimal(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesAnimalsService.remove(id);
  }
}
