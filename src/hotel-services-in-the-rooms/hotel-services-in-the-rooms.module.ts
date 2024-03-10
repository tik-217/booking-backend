import { Module } from '@nestjs/common';
import { HotelServicesInTheRoomsService } from './hotel-services-in-the-rooms.service';
import { HotelServicesInTheRoomsResolver } from './hotel-services-in-the-rooms.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesInTheRoomsResolver, HotelServicesInTheRoomsService, PrismaService],
})
export class HotelServicesInTheRoomsModule { }
