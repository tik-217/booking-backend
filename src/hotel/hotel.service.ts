// nest
import { Injectable } from '@nestjs/common';

// dto
import { CreateHotelInput } from './dto/create-hotel.input';
import { UpdateHotelInput } from './dto/update-hotel.input';

// nestjs-prisma
import { PrismaService } from 'nestjs-prisma';
import { Hotel } from './entities/hotel.entity';

@Injectable()
export class HotelService {
  constructor(private prisma: PrismaService) { }

  create(createHotelInput: CreateHotelInput) {
    return this.prisma.hotel.create({ data: createHotelInput });
  }

  findAll(args: Hotel) {
    // const services = args.servicesArg && args.servicesArg.split(process.env.SEPARATE_ARG_PARAMS);

    // console.log(services[0]);

    // const costSortingDirection = "asc";
    const costSortingDirection = "desc";

    return this.prisma.hotel.findMany({
      where: {
        name: args.name,
        type: args.type,
        stars: args.stars,
        description: args.description,
        city: args.city,
        country: args.country,
        address: args.address,
      },
      include: {
        reviewHotels: true,
        hotelServices: {
          include: {
            hotelServicesAnimals: true,
            hotelServicesBeautyAndHealth: true,
            hotelServicesEntertainment: true,
            hotelServicesBusiness: true,
            hotelServicesChildren: true,
            hotelServicesGeneral: true,
            hotelServicesInternet: true,
            hotelServicesInTheRooms: true,
            hotelServicesMeals: true,
            hotelServicesParking: true,
            hotelServicesSanitaryMeasures: true,
            hotelServicesServicesAndAmenities: true,
            hotelServicesSports: true,
            hotelServicesStaffSpeaks: true,
            hotelServicesTransfer: true,
          }
        },
        rooms: {
          orderBy: {
            cost: costSortingDirection,
          }
        },
      }
    });
  }

  findOne(id: number) {
    return this.prisma.hotel.findFirst({
      where: { id }, include: {
        reviewHotels: true,
        hotelServices: true,
        rooms: true,
      }
    });
  }

  update(id: number, updateHotelInput: UpdateHotelInput) {
    return this.prisma.hotel.update({
      where: { id },
      data: updateHotelInput,
    });
  }

  remove(id: number) {
    return this.prisma.hotel.delete({ where: { id } });
  }
}
