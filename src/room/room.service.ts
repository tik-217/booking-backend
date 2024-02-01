// nest
import { Injectable } from '@nestjs/common';

// service
import { PrismaService } from 'src/prisma.service';

// dto
import {
  GetOneRoomDto,
  CreateRoomDto,
  UpdateRoomDto,
  DeleteRoomDto,
} from './dto/room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.room.findMany();
  }

  getOne(getOneDto: GetOneRoomDto) {
    return this.prisma.room.findFirst({ where: { id: +getOneDto.id } });
  }

  createRoom(createDto: CreateRoomDto) {
    return this.prisma.room.create({
      data: createDto,
    });
  }

  updateRoom(updateParams: UpdateRoomDto, updateDto: UpdateRoomDto) {
    return this.prisma.room.update({
      where: { id: +updateParams.id },
      data: updateDto,
    });
  }

  deleteRoom(deleteParams: DeleteRoomDto) {
    return this.prisma.room.delete({ where: { id: +deleteParams.id } });
  }
}
