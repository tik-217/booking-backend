// nest
import { Module } from '@nestjs/common';

// module
import { PrismaModule } from 'src/prisma.module';

// services
import { RoomServicesService } from './room-services.service';

// controller
import { RoomServicesController } from './room-services.controller';

@Module({
  imports: [PrismaModule],
  providers: [RoomServicesService],
  controllers: [RoomServicesController],
})
export class RoomServicesModule {}
