import { Module } from '@nestjs/common';
import { ReviewHotelsService } from './review-hotels.service';
import { ReviewHotelsResolver } from './review-hotels.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [ReviewHotelsResolver, ReviewHotelsService, PrismaService],
})
export class ReviewHotelsModule {}
