import { Module } from '@nestjs/common';
import { HotelServicesTransferService } from './hotel-services-transfer.service';
import { HotelServicesTransferResolver } from './hotel-services-transfer.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesTransferResolver, HotelServicesTransferService, PrismaService],
})
export class HotelServicesTransferModule { }
