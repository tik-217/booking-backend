import { Injectable } from '@nestjs/common';
import { CreateHotelServicesChildrenInput } from './dto/create-hotel-services-children.input';
import { UpdateHotelServicesChildrenInput } from './dto/update-hotel-services-children.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesChildrenService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesChildrenInput: CreateHotelServicesChildrenInput) {
    return this.prisma.hotelServicesChildren.create({ data: createHotelServicesChildrenInput });
  }

  findAll() {
    return this.prisma.hotelServicesChildren.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesChildren.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesChildrenInput: UpdateHotelServicesChildrenInput) {
    return this.prisma.hotelServicesChildren.update({
      where: { id },
      data: updateHotelServicesChildrenInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesChildren.delete({
      where: { id },
    });
  }
}
