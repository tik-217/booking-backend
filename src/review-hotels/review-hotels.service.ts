import { Injectable } from '@nestjs/common';
import { CreateReviewHotelInput } from './dto/create-review-hotel.input';
import { UpdateReviewHotelInput } from './dto/update-review-hotel.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReviewHotelsService {
  constructor(private prisma: PrismaService) { }

  create(createReviewHotelInput: CreateReviewHotelInput) {
    return this.prisma.reviewHotels.create({
      data: createReviewHotelInput,
    });
  }

  findAll() {
    return this.prisma.reviewHotels.findMany();
  }

  findOne(id: number) {
    return this.prisma.reviewHotels.findFirst({ where: { id } });
  }

  update(id: number, updateReviewHotelInput: UpdateReviewHotelInput) {
    return this.prisma.reviewHotels.update({
      where: { id },
      data: updateReviewHotelInput,
    });
  }

  remove(id: number) {
    return this.prisma.reviewHotels.delete({ where: { id } });
  }
}