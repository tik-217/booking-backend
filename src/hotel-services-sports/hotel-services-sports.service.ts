import { Injectable } from '@nestjs/common';
import { CreateHotelServicesSportInput } from './dto/create-hotel-services-sport.input';
import { UpdateHotelServicesSportInput } from './dto/update-hotel-services-sport.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesSportsService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesSportInput: CreateHotelServicesSportInput) {
    return this.prisma.hotelServicesSports.create({ data: createHotelServicesSportInput });
  }

  findAll() {
    return this.prisma.hotelServicesSports.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesSports.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesSportInput: UpdateHotelServicesSportInput) {
    return this.prisma.hotelServicesSports.update({
      where: { id },
      data: updateHotelServicesSportInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesSports.delete({
      where: { id },
    });
  }
}
