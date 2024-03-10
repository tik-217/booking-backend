import { Injectable } from '@nestjs/common';
import { CreateHotelServicesBeautyAndHealthInput } from './dto/create-hotel-services-beauty-and-health.input';
import { UpdateHotelServicesBeautyAndHealthInput } from './dto/update-hotel-services-beauty-and-health.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesBeautyAndHealthService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesBeautyAndHealthInput: CreateHotelServicesBeautyAndHealthInput) {
    return this.prisma.hotelServicesBeautyAndHealth.create({ data: createHotelServicesBeautyAndHealthInput });
  }

  findAll() {
    return this.prisma.hotelServicesBeautyAndHealth.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesBeautyAndHealth.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesBeautyAndHealthInput: UpdateHotelServicesBeautyAndHealthInput) {
    return this.prisma.hotelServicesBeautyAndHealth.update({
      where: { id },
      data: updateHotelServicesBeautyAndHealthInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesBeautyAndHealth.delete({
      where: { id },
    });
  }
}
