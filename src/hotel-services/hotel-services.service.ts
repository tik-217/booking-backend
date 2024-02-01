// nest
import { Injectable } from '@nestjs/common';

// service
import { PrismaService } from 'src/prisma.service';
import {
  CreateHotelServicesDto,
  DeleteHotelServicesDto,
  GetOneHotelServicesDto,
  UpdateHotelServicesDto,
} from './dto/hotel-services.dto';

@Injectable()
export class HotelServicesService {
  constructor(private prisma: PrismaService) { }

  getAll() {
    return this.prisma.hotelServices.findMany();
  }

  getOne(getOneDto: GetOneHotelServicesDto) {
    return this.prisma.hotelServices.findFirst({ where: { id: +getOneDto.id } });
  }

  createHotelServices(createDto: CreateHotelServicesDto) {
    return this.prisma.hotelServices.create({ data: createDto });
  }

  updateHotelServices(
    updateParams: UpdateHotelServicesDto,
    updateDto: UpdateHotelServicesDto,
  ) {
    return this.prisma.hotelServices.update({
      where: { id: +updateParams.id },
      data: updateDto,
    });
  }

  deleteHotelServices(deleteParams: DeleteHotelServicesDto) {
    return this.prisma.hotelServices.delete({ where: { id: +deleteParams.id } });
  }
}
