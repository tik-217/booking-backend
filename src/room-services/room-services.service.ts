import { Injectable } from '@nestjs/common';
import { CreateRoomServiceInput } from './dto/create-room-service.input';
import { UpdateRoomServiceInput } from './dto/update-room-service.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RoomServicesService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.roomServices.findMany();
  }

  findOne(id: number) {
    return this.prisma.roomServices.findFirst({ where: { id } });
  }

  create(createRoomServiceInput: CreateRoomServiceInput) {
    return this.prisma.roomServices.create({ data: createRoomServiceInput });
  }

  update(id: number, updateRoomServiceInput: UpdateRoomServiceInput) {
    return this.prisma.roomServices.update({
      where: { id },
      data: updateRoomServiceInput,
    });
  }

  remove(id: number) {
    return this.prisma.roomServices.delete({ where: { id } });
  }
}
