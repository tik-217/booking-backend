import { ApiProperty } from '@nestjs/swagger';

export class GetOneHotelServicesDto {
  @ApiProperty()
  id: number;
}

export class CreateHotelServicesDto {
  @ApiProperty()
  terrace: string[];

  @ApiProperty()
  hotelsId: number;
}

export class UpdateHotelServicesDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  terrace: string[];
}

export class DeleteHotelServicesDto {
  @ApiProperty()
  id: number;
}
