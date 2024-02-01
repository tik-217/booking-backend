// nest
import { Module } from '@nestjs/common';

// controller
import { AppController } from './app.controller';

// service
import { AppService } from './app.service';

// modules
import { HotelModule } from 'src/hotel/hotel.module';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from 'src/room/room.module';
import { RoomServicesModule } from 'src/room-services/room-services.module';

@Module({
  imports: [
    RoomServicesModule,
    RoomModule,
    HotelModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
