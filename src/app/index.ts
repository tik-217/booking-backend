// nest
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// controller
import { AppController } from './app.controller';

// service
import { AppService } from './app.service';

// modules
import { HotelModule } from 'src/hotel/hotel.module';
import { HotelServicesModule } from 'src/hotel-services/hotel-services.module';
import { HotelServicesInTheRoomsModule } from 'src/hotel-services-in-the-rooms/hotel-services-in-the-rooms.module';
import { HotelServicesServicesAndAmenitiesModule } from 'src/hotel-services-services-and-amenities/hotel-services-services-and-amenities.module';
import { HotelServicesAnimalsModule } from 'src/hotel-services-animals/hotel-services-animals.module';
import { HotelServicesBeautyAndHealthModule } from 'src/hotel-services-beauty-and-health/hotel-services-beauty-and-health.module';
import { HotelServicesEntertainmentModule } from 'src/hotel-services-entertainment/hotel-services-entertainment.module';
import { HotelServicesGeneralModule } from 'src/hotel-services-general/hotel-services-general.module';
import { HotelServicesInternetModule } from 'src/hotel-services-internet/hotel-services-internet.module';
import { HotelServicesMealsModule } from 'src/hotel-services-meals/hotel-services-meals.module';
import { HotelServicesParkingModule } from 'src/hotel-services-parking/hotel-services-parking.module';
import { HotelServicesSanitaryMeasuresModule } from 'src/hotel-services-sanitary-measures/hotel-services-sanitary-measures.module';
import { HotelServicesSportsModule } from 'src/hotel-services-sports/hotel-services-sports.module';
import { HotelServicesStaffSpeaksModule } from 'src/hotel-services-staff-speaks/hotel-services-staff-speaks.module';
import { HotelServicesTransferModule } from 'src/hotel-services-transfer/hotel-services-transfer.module';
import { HotelServicesBusinessModule } from 'src/hotel-services-business/hotel-services-business.module';
import { HotelServicesChildrenModule } from 'src/hotel-services-children/hotel-services-children.module';
import { ReviewHotelsModule } from 'src/review-hotels/review-hotels.module';
import { ReviewRoomsModule } from 'src/review-rooms/review-rooms.module';
import { RoomServicesModule } from 'src/room-services/room-services.module';
import { RoomsModule } from 'src/rooms/rooms.module';
import { UploadImageModule } from 'src/upload-image/upload-image.module';

// prisma
import { PrismaModule } from 'nestjs-prisma';

// graphql
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// node
import { join } from 'path';

export { Module, ConfigModule, AppController, AppService, HotelModule, HotelServicesModule, HotelServicesInTheRoomsModule, HotelServicesServicesAndAmenitiesModule, HotelServicesAnimalsModule, HotelServicesBeautyAndHealthModule, HotelServicesEntertainmentModule, HotelServicesGeneralModule, HotelServicesInternetModule, HotelServicesMealsModule, HotelServicesParkingModule, HotelServicesSanitaryMeasuresModule, HotelServicesSportsModule, HotelServicesStaffSpeaksModule, HotelServicesTransferModule, HotelServicesBusinessModule, HotelServicesChildrenModule, ReviewHotelsModule, ReviewRoomsModule, RoomServicesModule, RoomsModule, PrismaModule, UploadImageModule, GraphQLModule, ApolloDriver, ApolloDriverConfig, join };