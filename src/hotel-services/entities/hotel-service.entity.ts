import { ObjectType, Field, Int } from '@nestjs/graphql';
import { HotelServicesAnimal } from 'src/hotel-services-animals/entities/hotel-services-animal.entity';
import { HotelServicesBeautyAndHealth } from 'src/hotel-services-beauty-and-health/entities/hotel-services-beauty-and-health.entity';
import { HotelServicesBusiness } from 'src/hotel-services-business/entities/hotel-services-business.entity';
import { HotelServicesChildren } from 'src/hotel-services-children/entities/hotel-services-children.entity';
import { HotelServicesEntertainment } from 'src/hotel-services-entertainment/entities/hotel-services-entertainment.entity';
import { HotelServicesGeneral } from 'src/hotel-services-general/entities/hotel-services-general.entity';
import { HotelServicesInTheRoom } from "src/hotel-services-in-the-rooms/entities/hotel-services-in-the-room.entity"
import { HotelServicesInternet } from 'src/hotel-services-internet/entities/hotel-services-internet.entity';
import { HotelServicesMeal } from 'src/hotel-services-meals/entities/hotel-services-meal.entity';
import { HotelServicesParking } from 'src/hotel-services-parking/entities/hotel-services-parking.entity';
import { HotelServicesSanitaryMeasure } from 'src/hotel-services-sanitary-measures/entities/hotel-services-sanitary-measure.entity';
import { HotelServicesServicesAndAmenity } from 'src/hotel-services-services-and-amenities/entities/hotel-services-services-and-amenity.entity';
import { HotelServicesSport } from 'src/hotel-services-sports/entities/hotel-services-sport.entity';
import { HotelServicesStaffSpeak } from 'src/hotel-services-staff-speaks/entities/hotel-services-staff-speak.entity';
import { HotelServicesTransfer } from 'src/hotel-services-transfer/entities/hotel-services-transfer.entity';

@ObjectType()
export default class HotelService {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  hotelId?: number;

  @Field(() => [HotelServicesAnimal], { nullable: "itemsAndList" })
  hotelServicesAnimals: HotelServicesAnimal;

  @Field(() => [HotelServicesAnimal], { nullable: "itemsAndList" })
  hotelServicesAnimal: HotelServicesAnimal[];

  @Field(() => [HotelServicesBeautyAndHealth], { nullable: "itemsAndList" })
  hotelServicesBeautyAndHealths: HotelServicesBeautyAndHealth[];

  @Field(() => [HotelServicesBeautyAndHealth], { nullable: "itemsAndList" })
  hotelServicesBeautyAndHealth: HotelServicesBeautyAndHealth[];

  @Field(() => [HotelServicesBusiness], { nullable: "itemsAndList" })
  hotelServicesBusinesses: HotelServicesBusiness[];

  @Field(() => [HotelServicesBusiness], { nullable: "itemsAndList" })
  hotelServicesBusiness: HotelServicesBusiness[];

  @Field(() => [HotelServicesChildren], { nullable: "itemsAndList" })
  hotelServicesChildren: HotelServicesChildren[];

  @Field(() => [HotelServicesChildren], { nullable: "itemsAndList" })
  hotelServicesChildrens: HotelServicesChildren[];

  @Field(() => [HotelServicesEntertainment], { nullable: "itemsAndList" })
  hotelServicesEntertainment: HotelServicesEntertainment[];

  @Field(() => [HotelServicesEntertainment], { nullable: "itemsAndList" })
  hotelServicesEntertainments: HotelServicesEntertainment[];

  @Field(() => [HotelServicesGeneral], { nullable: "itemsAndList" })
  hotelServicesGeneral: HotelServicesGeneral[];

  @Field(() => [HotelServicesGeneral], { nullable: "itemsAndList" })
  hotelServicesGenerals: HotelServicesGeneral[];

  @Field(() => [HotelServicesInTheRoom], { nullable: "itemsAndList" })
  hotelServicesInTheRoom: HotelServicesInTheRoom[];

  @Field(() => [HotelServicesInTheRoom], { nullable: "itemsAndList" })
  hotelServicesInTheRooms: HotelServicesInTheRoom[];

  @Field(() => [HotelServicesInternet], { nullable: "itemsAndList" })
  hotelServicesInternet: HotelServicesInternet[];

  @Field(() => [HotelServicesInternet], { nullable: "itemsAndList" })
  hotelServicesInternets: HotelServicesInternet[];

  @Field(() => [HotelServicesMeal], { nullable: "itemsAndList" })
  hotelServicesMeal: HotelServicesMeal[];

  @Field(() => [HotelServicesMeal], { nullable: "itemsAndList" })
  hotelServicesMeals: HotelServicesMeal[];

  @Field(() => [HotelServicesParking], { nullable: "itemsAndList" })
  hotelServicesParking: HotelServicesParking[];

  @Field(() => [HotelServicesParking], { nullable: "itemsAndList" })
  hotelServicesParkings: HotelServicesParking[];

  @Field(() => [HotelServicesSanitaryMeasure], { nullable: "itemsAndList" })
  hotelServicesSanitaryMeasure: HotelServicesSanitaryMeasure[];

  @Field(() => [HotelServicesSanitaryMeasure], { nullable: "itemsAndList" })
  hotelServicesSanitaryMeasures: HotelServicesSanitaryMeasure[];

  @Field(() => [HotelServicesServicesAndAmenity], { nullable: "itemsAndList" })
  hotelServicesServicesAndAmenity: HotelServicesServicesAndAmenity[];

  @Field(() => [HotelServicesServicesAndAmenity], { nullable: "itemsAndList" })
  hotelServicesServicesAndAmenities: HotelServicesServicesAndAmenity[];

  @Field(() => [HotelServicesSport], { nullable: "itemsAndList" })
  hotelServicesSport: HotelServicesSport[];

  @Field(() => [HotelServicesSport], { nullable: "itemsAndList" })
  hotelServicesSports: HotelServicesSport[];

  @Field(() => [HotelServicesStaffSpeak], { nullable: "itemsAndList" })
  hotelServicesStaffSpeak: HotelServicesStaffSpeak[];

  @Field(() => [HotelServicesStaffSpeak], { nullable: "itemsAndList" })
  hotelServicesStaffSpeaks: HotelServicesStaffSpeak[];

  @Field(() => [HotelServicesTransfer], { nullable: "itemsAndList" })
  hotelServicesTransfer: HotelServicesTransfer[];

  @Field(() => [HotelServicesTransfer], { nullable: "itemsAndList" })
  hotelServicesTransfers: HotelServicesTransfer[];
}
