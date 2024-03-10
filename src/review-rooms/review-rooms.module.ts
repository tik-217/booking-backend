import { Module } from '@nestjs/common';
import { ReviewRoomsService } from './review-rooms.service';
import { ReviewRoomsResolver } from './review-rooms.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [ReviewRoomsResolver, ReviewRoomsService, PrismaService],
})
export class ReviewRoomsModule {}
