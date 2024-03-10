import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HotelServicesChildren {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  childrensTvChannels: string;

  @Field(() => String)
  accommodationIsSuitableForFamiliesChildren: string;

  @Field(() => String)
  babysittingAndChildCare: string;

  @Field(() => String)
  image: string;
}
