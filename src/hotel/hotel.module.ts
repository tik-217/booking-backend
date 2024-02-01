// nest
import { Module } from '@nestjs/common';

// module
import { PrismaModule } from 'src/prisma.module';

// controller
import { HotelController } from './hotel.controller';

// service
import HotelServices from './hotel.service';

@Module({
  imports: [PrismaModule],
  controllers: [HotelController],
  providers: [HotelServices],
})
export class HotelModule {}
