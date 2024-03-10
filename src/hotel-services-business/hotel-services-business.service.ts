import { Injectable } from '@nestjs/common';
import { CreateHotelServicesBusinessInput } from './dto/create-hotel-services-business.input';
import { UpdateHotelServicesBusinessInput } from './dto/update-hotel-services-business.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesBusinessService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesBusinessInput: CreateHotelServicesBusinessInput) {
    return this.prisma.hotelServicesBusiness.create({ data: createHotelServicesBusinessInput });
  }

  findAll() {
    return this.prisma.hotelServicesBusiness.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesBusiness.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesBusinessInput: UpdateHotelServicesBusinessInput) {
    return this.prisma.hotelServicesBusiness.update({
      where: { id },
      data: updateHotelServicesBusinessInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesBusiness.delete({
      where: { id },
    });
  }
}
