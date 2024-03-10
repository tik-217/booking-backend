import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsResolver } from './rooms.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [RoomsResolver, RoomsService, PrismaService],
})
export class RoomsModule {}
