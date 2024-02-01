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
import HotelServices from './hotel.service';

// dto
import {
  CreateHotelDto,
  DeleteHotelDto,
  GetOneHotelDto,
  UpdateHotelDto,
} from './dto/hotel.dto';

@Controller('/hotel')
export class HotelController {
  constructor(private readonly hotel: HotelServices) {}

  @Get()
  getAll() {
    return this.hotel.getAll();
  }

  @Get('/:id')
  getOne(@Param() getOneHotelDto: GetOneHotelDto) {
    return this.hotel.getOne(getOneHotelDto);
  }

  @Post()
  createHotel(@Body() createHotelDto: CreateHotelDto) {
    return this.hotel.createHotel(createHotelDto);
  }

  @Put('/:id')
  updateHotel(
    @Param() updateParams: UpdateHotelDto,
    @Body() updateHotelDto: UpdateHotelDto,
  ) {
    return this.hotel.updateHotel(updateParams, updateHotelDto);
  }

  @Delete('/:id')
  deleteHotel(@Param() deleteParams: DeleteHotelDto) {
    return this.hotel.deleteHotel(deleteParams);
  }
}
