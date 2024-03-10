import { Module } from '@nestjs/common';
import { HotelServicesStaffSpeaksService } from './hotel-services-staff-speaks.service';
import { HotelServicesStaffSpeaksResolver } from './hotel-services-staff-speaks.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesStaffSpeaksResolver, HotelServicesStaffSpeaksService, PrismaService],
})
export class HotelServicesStaffSpeaksModule { }
