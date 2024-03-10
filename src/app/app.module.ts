import { Module, ConfigModule, AppController, AppService, HotelModule, HotelServicesModule, HotelServicesInTheRoomsModule, HotelServicesServicesAndAmenitiesModule, HotelServicesAnimalsModule, HotelServicesBeautyAndHealthModule, HotelServicesEntertainmentModule, HotelServicesGeneralModule, HotelServicesInternetModule, HotelServicesMealsModule, HotelServicesParkingModule, HotelServicesSanitaryMeasuresModule, HotelServicesSportsModule, HotelServicesStaffSpeaksModule, HotelServicesTransferModule, HotelServicesBusinessModule, HotelServicesChildrenModule, ReviewHotelsModule, ReviewRoomsModule, RoomServicesModule, RoomsModule, PrismaModule, UploadImageModule, GraphQLModule, ApolloDriver, ApolloDriverConfig, join } from "./index";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    PrismaModule,
    HotelModule,
    HotelServicesModule,
    HotelServicesAnimalsModule,
    HotelServicesBeautyAndHealthModule,
    HotelServicesBusinessModule,
    HotelServicesChildrenModule,
    HotelServicesEntertainmentModule,
    HotelServicesGeneralModule,
    HotelServicesInTheRoomsModule,
    HotelServicesInternetModule,
    HotelServicesMealsModule,
    HotelServicesParkingModule,
    HotelServicesSanitaryMeasuresModule,
    HotelServicesServicesAndAmenitiesModule,
    HotelServicesSportsModule,
    HotelServicesStaffSpeaksModule,
    HotelServicesTransferModule,
    ReviewHotelsModule,
    ReviewRoomsModule,
    RoomServicesModule,
    RoomsModule,
    UploadImageModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
