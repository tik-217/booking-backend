// nest
import { Injectable } from '@nestjs/common';

// service
import { PrismaService } from 'src/prisma.service';

// dto
import {
  CreateHotelDto,
  DeleteHotelDto,
  GetOneHotelDto,
  UpdateHotelDto,
} from './dto/hotel.dto';

@Injectable()
export default class HotelServices {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.hotel.findMany();
  }

  getOne(getOneDto: GetOneHotelDto) {
    return this.prisma.hotel.findFirst({ where: { id: getOneDto.id } });
  }

  createHotel(createDto: CreateHotelDto) {
    return this.prisma.hotel.create({ data: createDto });
  }

  updateHotel(updateParams: UpdateHotelDto, updateDto: UpdateHotelDto) {
    return this.prisma.hotel.update({
      where: { id: +updateParams.id },
      data: updateDto,
    });
  }

  deleteHotel(deleteParams: DeleteHotelDto) {
    return this.prisma.hotel.delete({ where: { id: +deleteParams.id } });
  }
}
