import { Module } from '@nestjs/common';
import { HotelServicesChildrenService } from './hotel-services-children.service';
import { HotelServicesChildrenResolver } from './hotel-services-children.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesChildrenResolver, HotelServicesChildrenService, PrismaService],
})
export class HotelServicesChildrenModule { }
