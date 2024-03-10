import { Field, Int, ObjectType } from '@nestjs/graphql';
import HotelServiceEntity from 'src/hotel-services/entities/hotel-service.entity';
import { ReviewHotel } from 'src/review-hotels/entities/review-hotel.entity';
import { Room } from 'src/rooms/entities/room.entity';

export type ServicesArg = "has-pool" | "";

@ObjectType()
export class Hotel {
  @Field(() => Int)
  id?: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  stars: number;

  @Field(() => String)
  description: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  additionalInfo?: string;

  @Field(() => [String])
  photo?: string[];

  @Field(() => String)
  country: string;

  @Field({ nullable: true })
  city?: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  legalAddress?: string;

  @Field(() => [String])
  policy?: [string, string];

  @Field(() => [HotelServiceEntity])
  hotelService?: HotelServiceEntity[];

  @Field(() => [HotelServiceEntity])
  hotelServices?: HotelServiceEntity[];
  // services, path to img

  @Field(() => [Room])
  rooms?: Room[];

  @Field(() => [ReviewHotel])
  reviewHotels?: ReviewHotel[];

  // args

  @Field(() => String, { nullable: true })
  servicesArg?: ServicesArg;

  @Field(() => String, { nullable: true })
  sorting?: string;
}

