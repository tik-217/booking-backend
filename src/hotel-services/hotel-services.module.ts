import { Module } from '@nestjs/common';
import { HotelServicesService } from './hotel-services.service';
import { HotelServicesResolver } from './hotel-services.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesResolver, HotelServicesService, PrismaService],
})
export class HotelServicesModule { }
