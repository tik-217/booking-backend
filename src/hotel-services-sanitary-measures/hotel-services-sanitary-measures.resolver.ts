import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesSanitaryMeasuresService } from './hotel-services-sanitary-measures.service';
import { HotelServicesSanitaryMeasure } from './entities/hotel-services-sanitary-measure.entity';
import { CreateHotelServicesSanitaryMeasureInput } from './dto/create-hotel-services-sanitary-measure.input';
import { UpdateHotelServicesSanitaryMeasureInput } from './dto/update-hotel-services-sanitary-measure.input';

@Resolver(() => HotelServicesSanitaryMeasure)
export class HotelServicesSanitaryMeasuresResolver {
  constructor(private readonly hotelServicesSanitaryMeasuresService: HotelServicesSanitaryMeasuresService) {}

  @Mutation(() => HotelServicesSanitaryMeasure)
  createHotelServicesSanitaryMeasure(@Args('createHotelServicesSanitaryMeasureInput') createHotelServicesSanitaryMeasureInput: CreateHotelServicesSanitaryMeasureInput) {
    return this.hotelServicesSanitaryMeasuresService.create(createHotelServicesSanitaryMeasureInput);
  }

  @Query(() => [HotelServicesSanitaryMeasure], { name: 'hotelServicesSanitaryMeasures' })
  findAll() {
    return this.hotelServicesSanitaryMeasuresService.findAll();
  }

  @Query(() => HotelServicesSanitaryMeasure, { name: 'hotelServicesSanitaryMeasure' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesSanitaryMeasuresService.findOne(id);
  }

  @Mutation(() => HotelServicesSanitaryMeasure)
  updateHotelServicesSanitaryMeasure(@Args('updateHotelServicesSanitaryMeasureInput') updateHotelServicesSanitaryMeasureInput: UpdateHotelServicesSanitaryMeasureInput) {
    return this.hotelServicesSanitaryMeasuresService.update(updateHotelServicesSanitaryMeasureInput.id, updateHotelServicesSanitaryMeasureInput);
  }

  @Mutation(() => HotelServicesSanitaryMeasure)
  removeHotelServicesSanitaryMeasure(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesSanitaryMeasuresService.remove(id);
  }
}
