import { createSeedClient } from '@snaplet/seed';

(async () => {
  const seed = await createSeedClient({
    dryRun: process.env.DRY !== '0'
  });

  await seed.$resetDatabase()

  const hotels = await seed.hotels((x) => [
    ...x(5, {
      hotelServices: [{
        hotelServicesAnimalsByHotelServicesId: [{}],
        hotelServicesBeautyAndHealthsByHotelServicesId: [{}],
        hotelServicesBusinessesByHotelServicesId: [{}],
        // hotelServicesChildrenByHotelServicesId: [{}],
        hotelServicesEntertainmentsByHotelServicesId: [{}],
        hotelServicesGeneralsByHotelServicesId: [{}],
        hotelServicesInternetsByHotelServicesId: [{}],
        hotelServicesInTheRoomsByHotelServicesId: [{}],
        hotelServicesMealsByHotelServicesId: [{}],
        hotelServicesParkingsByHotelServicesId: [{}],
        hotelServicesSanitaryMeasuresByHotelServicesId: [{}],
        hotelServicesServicesAndAmenitiesByHotelServicesId: [{}],
        hotelServicesSportsByHotelServicesId: [{}],
        hotelServicesStaffSpeaksByHotelServicesId: [{}],
        hotelServicesTransfersByHotelServicesId: [{}],
      }],
      rooms: (x) => x(4),
      reviewHotels: (x) => x(5)
    })
    // {
    //   type: "hotels",
    //   hotelServices: [{}],
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "guest-houses",
    //   hotelServices: [{}],
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "apartments",
    //   hotelServices: [{

    //   }],
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "cottages-villas-bungalows",
    //   hotelServices: [{}],
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "camping",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "hotels",
    //   hotelServices: (x) => x(1, {
    //   }),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "hotels",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "hotels",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "hotels",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "hotels",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "hotels",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "hotels",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "hotels",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "guest-houses",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "apartments",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "cottages-villas-bungalows",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
    // {
    //   type: "camping",
    //   hotelServices: (x) => x(1),
    //   rooms: (x) => x(3),
    //   reviewHotels: (x) => x(12)
    // },
  ]);

  // await seed.hotelServicesAnimals([{}], { connect: hotels });
  // await seed.hotelServicesBeautyAndHealths([{}], { connect: hotels });
  // await seed.hotelServicesBusinesses([{}], { connect: hotels });
  // await seed.hotelServicesChildren((x) => x(1), { connect: hotels });
  // await seed.hotelServicesEntertainments([{}], { connect: hotels });
  // await seed.hotelServicesGenerals([{}], { connect: hotels });
  // await seed.hotelServicesInternets([{}], { connect: hotels });
  // await seed.hotelServicesInTheRooms([{}], { connect: hotels });
  // await seed.hotelServicesMeals([{}], { connect: hotels });
  // await seed.hotelServicesParkings([{}], { connect: hotels });
  // await seed.hotelServicesSanitaryMeasures([{}], { connect: hotels });
  // await seed.hotelServicesServicesAndAmenities([{}], { connect: hotels });
  // await seed.hotelServicesSports([{}], { connect: hotels });
  // await seed.hotelServicesTransfers([{}], { connect: hotels });

  await seed.roomServices([{}]);

  await seed.reviewRooms([{}]);

  seed.$reset();
})();