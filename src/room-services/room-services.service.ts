// nest
import { Injectable } from '@nestjs/common';

// service
import { PrismaService } from 'src/prisma.service';
import {
  CreateRoomServicesDto,
  DeleteRoomServicesDto,
  GetOneRoomServicesDto,
  UpdateRoomServicesDto,
} from './dto/room-services.dto';

@Injectable()
export class RoomServicesService {
  constructor(private prisma: PrismaService) { }

  getAll() {
    return this.prisma.roomServices.findMany();
  }

  getOne(getOneDto: GetOneRoomServicesDto) {
    return this.prisma.roomServices.findFirst({ where: { id: +getOneDto.id } });
  }

  createRoomServices(createDto: CreateRoomServicesDto) {
    return this.prisma.roomServices.create({ data: createDto });
  }

  updateRoomServices(
    updateParams: UpdateRoomServicesDto,
    updateDto: UpdateRoomServicesDto,
  ) {
    return this.prisma.roomServices.update({
      where: { id: +updateParams.id },
      data: updateDto,
    });
  }

  deleteRoomServices(deleteParams: DeleteRoomServicesDto) {
    return this.prisma.roomServices.delete({ where: { id: +deleteParams.id } });
  }
}
