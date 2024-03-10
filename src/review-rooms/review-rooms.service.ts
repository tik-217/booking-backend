import { Injectable } from '@nestjs/common';
import { CreateReviewRoomInput } from './dto/create-review-room.input';
import { UpdateReviewRoomInput } from './dto/update-review-room.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReviewRoomsService {
  constructor(private prisma: PrismaService) { }

  create(createReviewRoomInput: CreateReviewRoomInput) {
    return this.prisma.reviewRooms.create({
      data: createReviewRoomInput,
    });
  }

  findAll() {
    return this.prisma.reviewRooms.findMany();
  }

  findOne(id: number) {
    return this.prisma.reviewRooms.findFirst({ where: { id } });
  }

  update(id: number, updateReviewRoomInput: UpdateReviewRoomInput) {
    return this.prisma.reviewRooms.update({
      where: { id },
      data: updateReviewRoomInput,
    });
  }

  remove(id: number) {
    return this.prisma.reviewRooms.delete({ where: { id } });
  }
}