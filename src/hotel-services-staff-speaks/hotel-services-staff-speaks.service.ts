import { Injectable } from '@nestjs/common';
import { CreateHotelServicesStaffSpeakInput } from './dto/create-hotel-services-staff-speak.input';
import { UpdateHotelServicesStaffSpeakInput } from './dto/update-hotel-services-staff-speak.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesStaffSpeaksService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesStaffSpeakInput: CreateHotelServicesStaffSpeakInput) {
    return this.prisma.hotelServicesStaffSpeaks.create({ data: createHotelServicesStaffSpeakInput });
  }

  findAll() {
    return this.prisma.hotelServicesStaffSpeaks.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesStaffSpeaks.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesStaffSpeakInput: UpdateHotelServicesStaffSpeakInput) {
    return this.prisma.hotelServicesStaffSpeaks.update({
      where: { id },
      data: updateHotelServicesStaffSpeakInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesStaffSpeaks.delete({
      where: { id },
    });
  }
}
