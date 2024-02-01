import { ApiProperty } from '@nestjs/swagger';

export class GetOneRoomServicesDto {
  @ApiProperty()
  id: number;
}

export class CreateRoomServicesDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  pool: string[];
}

export class UpdateRoomServicesDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  pool: string[];
}

export class DeleteRoomServicesDto {
  @ApiProperty()
  id: number;
}
