import { Injectable } from '@nestjs/common';
import { CreateHotelServicesSanitaryMeasureInput } from './dto/create-hotel-services-sanitary-measure.input';
import { UpdateHotelServicesSanitaryMeasureInput } from './dto/update-hotel-services-sanitary-measure.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesSanitaryMeasuresService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesSanitaryMeasureInput: CreateHotelServicesSanitaryMeasureInput) {
    return this.prisma.hotelServicesSanitaryMeasures.create({ data: createHotelServicesSanitaryMeasureInput });
  }

  findAll() {
    return this.prisma.hotelServicesSanitaryMeasures.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesSanitaryMeasures.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesSanitaryMeasureInput: UpdateHotelServicesSanitaryMeasureInput) {
    return this.prisma.hotelServicesSanitaryMeasures.update({
      where: { id },
      data: updateHotelServicesSanitaryMeasureInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesSanitaryMeasures.delete({
      where: { id },
    });
  }
}
