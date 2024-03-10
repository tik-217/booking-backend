import { Injectable } from '@nestjs/common';
import { CreateHotelServiceInput } from './dto/create-hotel-service.input';
import { UpdateHotelServiceInput } from './dto/update-hotel-service.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServiceInput: CreateHotelServiceInput) {
    return this.prisma.hotelServices.create({ data: createHotelServiceInput });
  }

  findAll() {
    return this.prisma.hotelServices.findMany({
      include: {
        hotelServicesAnimals: true,
        hotelServicesBeautyAndHealth: true,
        hotelServicesEntertainment: true,
        hotelServicesBusiness: true,
        hotelServicesChildren: true,
        hotelServicesGeneral: true,
        hotelServicesInternet: true,
        hotelServicesInTheRooms: true,
        hotelServicesMeals: true,
        hotelServicesParking: true,
        hotelServicesSanitaryMeasures: true,
        hotelServicesServicesAndAmenities: true,
        hotelServicesSports: true,
        hotelServicesStaffSpeaks: true,
        hotelServicesTransfer: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.hotelServices.findFirst({
      where: { id },
      include: {
        hotelServicesAnimals: true,
        hotelServicesBeautyAndHealth: true,
        hotelServicesEntertainment: true,
        hotelServicesBusiness: true,
        hotelServicesChildren: true,
        hotelServicesGeneral: true,
        hotelServicesInternet: true,
        hotelServicesInTheRooms: true,
        hotelServicesMeals: true,
        hotelServicesParking: true,
        hotelServicesSanitaryMeasures: true,
        hotelServicesServicesAndAmenities: true,
        hotelServicesSports: true,
        hotelServicesStaffSpeaks: true,
        hotelServicesTransfer: true,
      }
    });
  }

  update(id: number, updateHotelServiceInput: UpdateHotelServiceInput) {
    return this.prisma.hotelServices.update({
      where: { id },
      data: updateHotelServiceInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServices.delete({
      where: { id },
    });
  }
}