import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelServicesStaffSpeaksService } from './hotel-services-staff-speaks.service';
import { HotelServicesStaffSpeak } from './entities/hotel-services-staff-speak.entity';
import { CreateHotelServicesStaffSpeakInput } from './dto/create-hotel-services-staff-speak.input';
import { UpdateHotelServicesStaffSpeakInput } from './dto/update-hotel-services-staff-speak.input';

@Resolver(() => HotelServicesStaffSpeak)
export class HotelServicesStaffSpeaksResolver {
  constructor(private readonly hotelServicesStaffSpeaksService: HotelServicesStaffSpeaksService) {}

  @Mutation(() => HotelServicesStaffSpeak)
  createHotelServicesStaffSpeak(@Args('createHotelServicesStaffSpeakInput') createHotelServicesStaffSpeakInput: CreateHotelServicesStaffSpeakInput) {
    return this.hotelServicesStaffSpeaksService.create(createHotelServicesStaffSpeakInput);
  }

  @Query(() => [HotelServicesStaffSpeak], { name: 'hotelServicesStaffSpeaks' })
  findAll() {
    return this.hotelServicesStaffSpeaksService.findAll();
  }

  @Query(() => HotelServicesStaffSpeak, { name: 'hotelServicesStaffSpeak' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesStaffSpeaksService.findOne(id);
  }

  @Mutation(() => HotelServicesStaffSpeak)
  updateHotelServicesStaffSpeak(@Args('updateHotelServicesStaffSpeakInput') updateHotelServicesStaffSpeakInput: UpdateHotelServicesStaffSpeakInput) {
    return this.hotelServicesStaffSpeaksService.update(updateHotelServicesStaffSpeakInput.id, updateHotelServicesStaffSpeakInput);
  }

  @Mutation(() => HotelServicesStaffSpeak)
  removeHotelServicesStaffSpeak(@Args('id', { type: () => Int }) id: number) {
    return this.hotelServicesStaffSpeaksService.remove(id);
  }
}
