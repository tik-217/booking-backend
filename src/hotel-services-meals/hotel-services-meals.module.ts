import { Module } from '@nestjs/common';
import { HotelServicesMealsService } from './hotel-services-meals.service';
import { HotelServicesMealsResolver } from './hotel-services-meals.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  providers: [HotelServicesMealsResolver, HotelServicesMealsService, PrismaService],
})
export class HotelServicesMealsModule { }
