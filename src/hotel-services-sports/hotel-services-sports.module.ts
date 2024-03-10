import { Module } from '@nestjs/common';
import { HotelServicesSportsService } from './hotel-services-sports.service';
import { HotelServicesSportsResolver } from './hotel-services-sports.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesSportsResolver, HotelServicesSportsService, PrismaService],
})
export class HotelServicesSportsModule { }
