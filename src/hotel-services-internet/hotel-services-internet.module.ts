import { Module } from '@nestjs/common';
import { HotelServicesInternetService } from './hotel-services-internet.service';
import { HotelServicesInternetResolver } from './hotel-services-internet.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesInternetResolver, HotelServicesInternetService, PrismaService],
})
export class HotelServicesInternetModule { }
