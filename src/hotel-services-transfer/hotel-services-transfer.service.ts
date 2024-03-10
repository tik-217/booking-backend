import { Injectable } from '@nestjs/common';
import { CreateHotelServicesTransferInput } from './dto/create-hotel-services-transfer.input';
import { UpdateHotelServicesTransferInput } from './dto/update-hotel-services-transfer.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesTransferService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesTransferInput: CreateHotelServicesTransferInput) {
    return this.prisma.hotelServicesTransfer.create({ data: createHotelServicesTransferInput });
  }

  findAll() {
    return this.prisma.hotelServicesTransfer.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesTransfer.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesTransferInput: UpdateHotelServicesTransferInput) {
    return this.prisma.hotelServicesTransfer.update({
      where: { id },
      data: updateHotelServicesTransferInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesTransfer.delete({
      where: { id },
    });
  }
}
