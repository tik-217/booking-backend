import { Module } from '@nestjs/common';
import { HotelServicesBeautyAndHealthService } from './hotel-services-beauty-and-health.service';
import { HotelServicesBeautyAndHealthResolver } from './hotel-services-beauty-and-health.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesBeautyAndHealthResolver, HotelServicesBeautyAndHealthService, PrismaService],
})
export class HotelServicesBeautyAndHealthModule { }
