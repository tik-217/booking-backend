import { ApiProperty } from '@nestjs/swagger';

export class GetOneRoomDto {
  @ApiProperty()
  id: number;
}

export class CreateRoomDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  cost: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  photo: string[];

  @ApiProperty()
  numberOfGuests: number;

  @ApiProperty()
  roomServicesId: number;

  @ApiProperty()
  hotelId: number;
}

export class UpdateRoomDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  cost: number;

  @ApiProperty()
  photo: string[];

  @ApiProperty()
  numberOfGuests: number;

  @ApiProperty()
  roomServicesId: number;

  @ApiProperty()
  hotelId: number;
}

export class DeleteRoomDto {
  @ApiProperty()
  id: number;
}
