import { Injectable } from '@nestjs/common';
import { CreateHotelServicesMealInput } from './dto/create-hotel-services-meal.input';
import { UpdateHotelServicesMealInput } from './dto/update-hotel-services-meal.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HotelServicesMealsService {
  constructor(private prisma: PrismaService) { }

  create(createHotelServicesMealInput: CreateHotelServicesMealInput) {
    return this.prisma.hotelServicesMeals.create({ data: createHotelServicesMealInput });
  }

  findAll() {
    return this.prisma.hotelServicesMeals.findMany();
  }

  findOne(id: number) {
    return this.prisma.hotelServicesMeals.findFirst({
      where: { id },
    });
  }

  update(id: number, updateHotelServicesMealInput: UpdateHotelServicesMealInput) {
    return this.prisma.hotelServicesMeals.update({
      where: { id },
      data: updateHotelServicesMealInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotelServicesMeals.delete({
      where: { id },
    });
  }
}
