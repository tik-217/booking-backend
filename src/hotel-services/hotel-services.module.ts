import { Module } from '@nestjs/common';
import { HotelServicesController } from './hotel-services.controller';
import { HotelServicesService } from './hotel-services.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HotelServicesController],
  providers: [HotelServicesService],
})
export class HotelServicesModule { }
