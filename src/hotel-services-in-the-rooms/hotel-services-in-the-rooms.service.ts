import { Injectable } from '@nestjs/common';
import { CreateHotelServicesInTheRoomInput } from './dto/create-hotel-services-in-the-room.input';
import { UpdateHotelServicesInTheRoomInput } from './dto/update-hotel-services-in-the-room.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesInTheRoomsService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesInTheRoomInput: CreateHotelServicesInTheRoomInput) {
    return this.prisma.hotelServicesInTheRooms.create({ data: createHotelServicesInTheRoomInput });
  }

  findAll() {
    return this.prisma.hotelServicesInTheRooms.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesInTheRooms.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesInTheRoomInput: UpdateHotelServicesInTheRoomInput) {
    return this.prisma.hotelServicesInTheRooms.update({
      where: { id },
      data: updateHotelServicesInTheRoomInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesInTheRooms.delete({
      where: { id },
    });
  }
}
