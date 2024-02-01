// nest
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

// services
import { RoomService } from './room.service';

// dto
import {
  CreateRoomDto,
  GetOneRoomDto,
  UpdateRoomDto,
  DeleteRoomDto,
} from './dto/room.dto';

@Controller('/room')
export class RoomController {
  constructor(private readonly room: RoomService) {}

  @Get()
  getAll() {
    return this.room.getAll();
  }

  @Get('/:id')
  getOne(@Param() getOneRoomDto: GetOneRoomDto) {
    return this.room.getOne(getOneRoomDto);
  }

  @Post()
  createRoom(@Body() createDto: CreateRoomDto) {
    return this.room.createRoom(createDto);
  }

  @Put('/:id')
  updateRoom(
    @Param() updateParams: UpdateRoomDto,
    @Body() updateDto: UpdateRoomDto,
  ) {
    return this.room.updateRoom(updateParams, updateDto);
  }

  @Delete('/:id')
  deleteRoom(@Param() deleteParams: DeleteRoomDto) {
    return this.room.deleteRoom(deleteParams);
  }
}
