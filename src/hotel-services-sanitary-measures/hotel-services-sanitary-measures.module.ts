import { Module } from '@nestjs/common';
import { HotelServicesSanitaryMeasuresService } from './hotel-services-sanitary-measures.service';
import { HotelServicesSanitaryMeasuresResolver } from './hotel-services-sanitary-measures.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesSanitaryMeasuresResolver, HotelServicesSanitaryMeasuresService, PrismaService],
})
export class HotelServicesSanitaryMeasuresModule { }
