import { Module } from '@nestjs/common';
import { RoomServicesService } from './room-services.service';
import { RoomServicesResolver } from './room-services.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [RoomServicesResolver, RoomServicesService, PrismaService],
})
export class RoomServicesModule {}
