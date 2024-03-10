import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHotelServicesChildrenInput {
  @Field(() => String)
  childrensTvChannels: string;

  @Field(() => String)
  accommodationIsSuitableForFamiliesChildren: string;

  @Field(() => String)
  babysittingAndChildCare: string;

  @Field(() => String)
  image: string;
}
