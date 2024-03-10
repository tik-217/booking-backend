import { Injectable } from '@nestjs/common';
import { CreateHotelServicesGeneralInput } from './dto/create-hotel-services-general.input';
import { UpdateHotelServicesGeneralInput } from './dto/update-hotel-services-general.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesGeneralService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesGeneralInput: CreateHotelServicesGeneralInput) {
    return this.prisma.hotelServicesGeneral.create({ data: createHotelServicesGeneralInput });
  }

  findAll() {
    return this.prisma.hotelServicesGeneral.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesGeneral.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesGeneralInput: UpdateHotelServicesGeneralInput) {
    return this.prisma.hotelServicesGeneral.update({
      where: { id },
      data: updateHotelServicesGeneralInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesGeneral.delete({
      where: { id },
    });
  }
}
