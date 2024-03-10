import { Module } from '@nestjs/common';
import { HotelServicesEntertainmentService } from './hotel-services-entertainment.service';
import { HotelServicesEntertainmentResolver } from './hotel-services-entertainment.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesEntertainmentResolver, HotelServicesEntertainmentService, PrismaService],
})
export class HotelServicesEntertainmentModule { }
