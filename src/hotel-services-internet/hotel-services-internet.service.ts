import { Injectable } from '@nestjs/common';
import { CreateHotelServicesInternetInput } from './dto/create-hotel-services-internet.input';
import { UpdateHotelServicesInternetInput } from './dto/update-hotel-services-internet.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesInternetService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesInternetInput: CreateHotelServicesInternetInput) {
    return this.prisma.hotelServicesInternet.create({ data: createHotelServicesInternetInput });
  }

  findAll() {
    return this.prisma.hotelServicesInternet.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesInternet.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesInternetInput: UpdateHotelServicesInternetInput) {
    return this.prisma.hotelServicesInternet.update({
      where: { id },
      data: updateHotelServicesInternetInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesInternet.delete({
      where: { id },
    });
  }
}
