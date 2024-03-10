import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelResolver } from './hotel.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelResolver, HotelService, PrismaService],
})
export class HotelModule { }