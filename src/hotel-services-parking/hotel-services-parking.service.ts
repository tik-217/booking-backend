import { Injectable } from '@nestjs/common';
import { CreateHotelServicesParkingInput } from './dto/create-hotel-services-parking.input';
import { UpdateHotelServicesParkingInput } from './dto/update-hotel-services-parking.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesParkingService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesParkingInput: CreateHotelServicesParkingInput) {
    return this.prisma.hotelServicesParking.create({ data: createHotelServicesParkingInput });
  }

  findAll() {
    return this.prisma.hotelServicesParking.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesParking.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesParkingInput: UpdateHotelServicesParkingInput) {
    return this.prisma.hotelServicesParking.update({
      where: { id },
      data: updateHotelServicesParkingInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesParking.delete({
      where: { id },
    });
  }
}
