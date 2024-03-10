import { Module } from '@nestjs/common';
import { HotelServicesGeneralService } from './hotel-services-general.service';
import { HotelServicesGeneralResolver } from './hotel-services-general.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesGeneralResolver, HotelServicesGeneralService, PrismaService],
})
export class HotelServicesGeneralModule { }
