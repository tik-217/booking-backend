import { Injectable } from '@nestjs/common';
import { CreateHotelServicesServicesAndAmenityInput } from './dto/create-hotel-services-services-and-amenity.input';
import { UpdateHotelServicesServicesAndAmenityInput } from './dto/update-hotel-services-services-and-amenity.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesServicesAndAmenitiesService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesServicesAndAmenityInput: CreateHotelServicesServicesAndAmenityInput) {
    return this.prisma.hotelServicesServicesAndAmenities.create({ data: createHotelServicesServicesAndAmenityInput });
  }

  findAll() {
    return this.prisma.hotelServicesServicesAndAmenities.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesServicesAndAmenities.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesServicesAndAmenityInput: UpdateHotelServicesServicesAndAmenityInput) {
    return this.prisma.hotelServicesServicesAndAmenities.update({
      where: { id },
      data: updateHotelServicesServicesAndAmenityInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesServicesAndAmenities.delete({
      where: { id },
    });
  }
}
