import { Injectable } from '@nestjs/common';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) { }

  create(createRoomInput: CreateRoomInput) {
    return this.prisma.rooms.create({
      data: createRoomInput,
    });
  }

  findAll() {
    return this.prisma.rooms.findMany();
  }

  findOne(id: number) {
    return this.prisma.rooms.findFirst({ where: { id } });
  }

  update(id: number, updateRoomInput: UpdateRoomInput) {
    return this.prisma.rooms.update({
      where: { id },
      data: updateRoomInput,
    });
  }

  remove(id: number) {
    return this.prisma.rooms.delete({ where: { id } });
  }
}