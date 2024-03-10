import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesMealsService } from './hotel-services-meals.service';
import { HotelServicesMeal } from './entities/hotel-services-meal.entity';
import { CreateHotelServicesMealInput } from './dto/create-hotel-services-meal.input';
import { UpdateHotelServicesMealInput } from './dto/update-hotel-services-meal.input';

@Resolver(() => HotelServicesMeal)
export class HotelServicesMealsResolver {
  constructor(private readonly hotelServicesMealsService: HotelServicesMealsService) {}

  @Mutation(() => HotelServicesMeal)
  createHotelServicesMeal(@Args('createHotelServicesMealInput') createHotelServicesMealInput: CreateHotelServicesMealInput) {
    return this.hotelServicesMealsService.create(createHotelServicesMealInput);
  }

  @Query(() => [HotelServicesMeal], { name: 'hotelServicesMeals' })
  findAll() {
    return this.hotelServicesMealsService.findAll();
  }

  @Query(() => HotelServicesMeal, { name: 'hotelServicesMeal' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesMealsService.findOne(id);
  }

  @Mutation(() => HotelServicesMeal)
  updateHotelServicesMeal(@Args('updateHotelServicesMealInput') updateHotelServicesMealInput: UpdateHotelServicesMealInput) {
    return this.hotelServicesMealsService.update(updateHotelServicesMealInput.id, updateHotelServicesMealInput);
  }

  @Mutation(() => HotelServicesMeal)
  removeHotelServicesMeal(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesMealsService.remove(id);
  }
}
