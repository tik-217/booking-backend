import { Module } from '@nestjs/common';
import { HotelServicesBusinessService } from './hotel-services-business.service';
import { HotelServicesBusinessResolver } from './hotel-services-business.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesBusinessResolver, HotelServicesBusinessService, PrismaService],
})
export class HotelServicesBusinessModule { }
