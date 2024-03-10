// graphql
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

// service
import { HotelService } from './hotel.service';

// entity
import { Hotel, ServicesArg } from './entities/hotel.entity';
import HotelServiceEntity from 'src/hotel-services/entities/hotel-service.entity';
import { Room } from 'src/rooms/entities/room.entity';
import { ReviewHotel } from 'src/review-hotels/entities/review-hotel.entity';

// dto
import { CreateHotelInput } from './dto/create-hotel.input';
import { UpdateHotelInput } from './dto/update-hotel.input';

interface IHotelFindAllArgs {
  type: string,
  name: string,
  stars: number,
  description: string,
  city: string,
  country: string,
  address: string,
  hotelServices: HotelServiceEntity[],
  rooms: Room[],
  reviewHotels: ReviewHotel[];
}

@Resolver(() => Hotel)
export class HotelResolver {
  constructor(private readonly hotel: HotelService) { }

  @Mutation(() => Hotel)
  createHotel(@Args('createHotelInput') createHotelInput: CreateHotelInput) {
    return this.hotel.create(createHotelInput);
  }

  @Query(() => [Hotel], { name: 'hotels' })
  findAll(
    @Args("type", { type: () => String, nullable: true }) type?: string,
    @Args("name", { type: () => String, nullable: true }) name?: string,
    @Args("stars", { type: () => Int, nullable: true }) stars?: number,
    @Args("description", { type: () => String, nullable: true }) description?: string,
    @Args("city", { type: () => String, nullable: true }) city?: string,
    @Args("country", { type: () => String, nullable: true }) country?: string,
    @Args("address", { type: () => String, nullable: true }) address?: string,
    @Args("services", { type: () => String, nullable: true }) servicesArg?: ServicesArg,
    @Args("sorting", { type: () => String, nullable: true }) sorting?: string,
  ) {
    return this.hotel.findAll({
      type,
      name,
      stars,
      description,
      city,
      country,
      address,
      servicesArg,
      sorting,
    });
  }

  @Query(() => Hotel, { name: 'hotel' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotel.findOne(id);
  }

  @Mutation(() => Hotel)
  updateHotel(@Args('updateHotelInput') updateHotelInput: UpdateHotelInput) {
    return this.hotel.update(updateHotelInput.id, updateHotelInput);
  }

  @Mutation(() => Hotel)
  removeHotel(@Args('id', { type: () => Int }) id: number) {
    return this.hotel.remove(id);
  }
}
