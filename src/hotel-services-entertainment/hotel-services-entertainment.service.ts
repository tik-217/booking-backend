import { Injectable } from '@nestjs/common';
import { CreateHotelServicesEntertainmentInput } from './dto/create-hotel-services-entertainment.input';
import { UpdateHotelServicesEntertainmentInput } from './dto/update-hotel-services-entertainment.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesEntertainmentService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesEntertainmentInput: CreateHotelServicesEntertainmentInput) {
    return this.prisma.hotelServicesEntertainment.create({ data: createHotelServicesEntertainmentInput });
  }

  findAll() {
    return this.prisma.hotelServicesEntertainment.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesEntertainment.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesEntertainmentInput: UpdateHotelServicesEntertainmentInput) {
    return this.prisma.hotelServicesEntertainment.update({
      where: { id },
      data: updateHotelServicesEntertainmentInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesEntertainment.delete({
      where: { id },
    });
  }
}
