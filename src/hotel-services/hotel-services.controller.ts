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
import { HotelServicesService } from './hotel-services.service';
import {
  CreateHotelServicesDto,
  DeleteHotelServicesDto,
  GetOneHotelServicesDto,
  UpdateHotelServicesDto,
} from './dto/hotel-services.dto';

@Controller('hotel-services')
export class HotelServicesController {
  constructor(private readonly hotelServices: HotelServicesService) { }

  @Get()
  getAll() {
    return this.hotelServices.getAll();
  }

  @Get('/:id')
  getOne(@Param() getOneDto: GetOneHotelServicesDto) {
    return this.hotelServices.getOne(getOneDto);
  }

  @Post()
  createHotelServices(@Body() createDto: CreateHotelServicesDto) {
    return this.hotelServices.createHotelServices(createDto);
  }

  @Put('/:id')
  updateHotelServices(
    @Param() updateParams: UpdateHotelServicesDto,
    @Body() updateDto: UpdateHotelServicesDto,
  ) {
    return this.hotelServices.updateHotelServices(updateParams, updateDto);
  }

  @Delete('/:id')
  deleteHotelServices(@Param() deleteParams: DeleteHotelServicesDto) {
    return this.hotelServices.deleteHotelServices(deleteParams);
  }
}
