import { Injectable } from '@nestjs/common';
import { CreateHotelServicesAnimalInput } from './dto/create-hotel-services-animal.input';
import { UpdateHotelServicesAnimalInput } from './dto/update-hotel-services-animal.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesAnimalsService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesAnimalInput: CreateHotelServicesAnimalInput) {
    return this.prisma.hotelServicesAnimals.create({ data: createHotelServicesAnimalInput });
  }

  findAll() {
    return this.prisma.hotelServicesAnimals.findMany({
      include: {
        HotelServices: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.hotelServicesAnimals.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesAnimalInput: UpdateHotelServicesAnimalInput) {
    return this.prisma.hotelServicesAnimals.update({
      where: { id },
      data: updateHotelServicesAnimalInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesAnimals.delete({
      where: { id },
    });
  }
}
