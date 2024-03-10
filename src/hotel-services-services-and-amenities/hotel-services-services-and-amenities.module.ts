import { Module } from '@nestjs/common';
import { HotelServicesServicesAndAmenitiesService } from './hotel-services-services-and-amenities.service';
import { HotelServicesServicesAndAmenitiesResolver } from './hotel-services-services-and-amenities.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesServicesAndAmenitiesResolver, HotelServicesServicesAndAmenitiesService, PrismaService],
})
export class HotelServicesServicesAndAmenitiesModule { }
