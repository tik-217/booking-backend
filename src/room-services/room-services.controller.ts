import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

// service
import { RoomServicesService } from './room-services.service';
import {
  CreateRoomServicesDto,
  DeleteRoomServicesDto,
  GetOneRoomServicesDto,
  UpdateRoomServicesDto,
} from './dto/room-services.dto';

@Controller('room-services')
export class RoomServicesController {
  constructor(private readonly roomServices: RoomServicesService) { }

  @Get()
  getAll() {
    return this.roomServices.getAll();
  }

  @Get('/:id')
  getOne(@Param() getOneRoomDto: GetOneRoomServicesDto) {
    return this.roomServices.getOne(getOneRoomDto);
  }

  @Post()
  createRoomServices(@Body() createDto: CreateRoomServicesDto) {
    return this.roomServices.createRoomServices(createDto);
  }

  @Put('/:id')
  updateRoomServices(
    @Param() updateParams: UpdateRoomServicesDto,
    @Body() updateDto: UpdateRoomServicesDto,
  ) {
    return this.roomServices.updateRoomServices(updateParams, updateDto);
  }

  @Delete('/:id')
  deleteRoomServices(@Param() deleteParams: DeleteRoomServicesDto) {
    return this.roomServices.deleteRoomServices(deleteParams);
  }
}
