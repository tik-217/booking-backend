import { ApiProperty } from '@nestjs/swagger';

export class GetOneHotelDto {
  @ApiProperty()
  id: number;
}

export class CreateHotelDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  stars: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  additionalInfo?: string;

  @ApiProperty()
  photo?: string[];

  @ApiProperty()
  country: string;

  @ApiProperty()
  city?: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  legalAddress: string[];

  @ApiProperty()
  policy?: Date[];
}

export class UpdateHotelDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  stars: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  additionalInfo?: string;

  @ApiProperty()
  photo?: string[];

  @ApiProperty()
  country: string;

  @ApiProperty()
  city?: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  legalAddress: string[];

  @ApiProperty()
  policy?: Date[];
}

export class DeleteHotelDto {
  @ApiProperty()
  id: number;
}
