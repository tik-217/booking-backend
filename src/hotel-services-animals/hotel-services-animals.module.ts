import { Module } from '@nestjs/common';
import { HotelServicesAnimalsService } from './hotel-services-animals.service';
import { HotelServicesAnimalsResolver } from './hotel-services-animals.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesAnimalsResolver, HotelServicesAnimalsService, PrismaService],
})
export class HotelServicesAnimalsModule {}
