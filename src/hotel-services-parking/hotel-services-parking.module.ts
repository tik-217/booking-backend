import { Module } from '@nestjs/common';
import { HotelServicesParkingResolver } from './hotel-services-parking.resolver';
import { PrismaService } from 'nestjs-prisma';
import { HotelServicesParkingService } from './hotel-services-parking.service';

@Module({
  providers: [HotelServicesParkingResolver, HotelServicesParkingService, PrismaService],
})
export class HotelServicesParkingModule { }
