type ScalarField = {
  name: string;
  type: string;
};
type ObjectField = ScalarField & {
  relationFromFields: string[];
  relationToFields: string[];
};
type Inflection = {
  modelName?: (name: string) => string;
  scalarField?: (field: ScalarField) => string;
  parentField?: (field: ObjectField, oppositeBaseNameMap: Record<string, string>) => string;
  childField?: (field: ObjectField, oppositeField: ObjectField, oppositeBaseNameMap: Record<string, string>) => string;
  oppositeBaseNameMap?: Record<string, string>;
};
type Override = {
  Account?: {
    name?: string;
    fields?: {
      id?: string;
      userId?: string;
      type?: string;
      provider?: string;
      providerAccountId?: string;
      refresh_token?: string;
      access_token?: string;
      expires_at?: string;
      token_type?: string;
      scope?: string;
      id_token?: string;
      session_state?: string;
      User?: string;
    };
  }
  Hotel?: {
    name?: string;
    fields?: {
      id?: string;
      name?: string;
      stars?: string;
      type?: string;
      description?: string;
      additionalInfo?: string;
      photo?: string;
      country?: string;
      city?: string;
      address?: string;
      legalAddress?: string;
      policy?: string;
      HotelServices?: string;
      ReviewHotels?: string;
      Rooms?: string;
    };
  }
  HotelServices?: {
    name?: string;
    fields?: {
      id?: string;
      hotelId?: string;
      Hotel?: string;
      HotelServicesAnimals?: string;
      HotelServicesBeautyAndHealth?: string;
      HotelServicesBusiness?: string;
      HotelServicesChildren?: string;
      HotelServicesEntertainment?: string;
      HotelServicesGeneral?: string;
      HotelServicesInTheRooms?: string;
      HotelServicesInternet?: string;
      HotelServicesMeals?: string;
      HotelServicesParking?: string;
      HotelServicesSanitaryMeasures?: string;
      HotelServicesServicesAndAmenities?: string;
      HotelServicesSports?: string;
      HotelServicesStaffSpeaks?: string;
      HotelServicesTransfer?: string;
    };
  }
  HotelServicesAnimals?: {
    name?: string;
    fields?: {
      id?: string;
      accommodationWithPetsIsPaidSeparately?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesBeautyAndHealth?: {
    name?: string;
    fields?: {
      id?: string;
      firstAidKit?: string;
      massageIsPaidSeparately?: string;
      beautySalonIsPaidSeparately?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesBusiness?: {
    name?: string;
    fields?: {
      id?: string;
      conferenceHall?: string;
      xerox?: string;
      organizationOfMeetingsAndBanquets?: string;
      videoRentalAndComputerEquipment?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesChildren?: {
    name?: string;
    fields?: {
      id?: string;
      childrensTvChannels?: string;
      accommodationIsSuitableForFamiliesChildren?: string;
      babysittingAndChildCare?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesEntertainment?: {
    name?: string;
    fields?: {
      id?: string;
      suitableForFestiveEvents?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesGeneral?: {
    name?: string;
    fields?: {
      id?: string;
      designHotel?: string;
      individualCheckInAndCheckOut?: string;
      computer?: string;
      airConditioning?: string;
      fullDayHourFrontDesk?: string;
      elevator?: string;
      fireExtinguisher?: string;
      nonSmokingHotel?: string;
      heating?: string;
      lateCheckOut?: string;
      dishwasherCar?: string;
      earlyCheckIn?: string;
      washingMachine?: string;
      expeditedCheckInAndCheckOut?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesInTheRooms?: {
    name?: string;
    fields?: {
      id?: string;
      vipAmenitiesInTheRoom?: string;
      cableTv?: string;
      bridalSuite?: string;
      musicCenter?: string;
      roomsForAllergySufferers?: string;
      smokingRooms?: string;
      nonSmokingRooms?: string;
      roomService?: string;
      safeInTheRoom?: string;
      familyRooms?: string;
      tv?: string;
      refrigerator?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesInternet?: {
    name?: string;
    fields?: {
      id?: string;
      freeWiFi?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesMeals?: {
    name?: string;
    fields?: {
      id?: string;
      freeTeaOrCoffee?: string;
      fullBoardIsPossible?: string;
      halfBoardIsPossible?: string;
      breakfastInTheRoom?: string;
      kitchen?: string;
      microwave?: string;
      restaurant?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesParking?: {
    name?: string;
    fields?: {
      id?: string;
      parkingIsPaidSeparately?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesSanitaryMeasures?: {
    name?: string;
    fields?: {
      id?: string;
      personalProtectiveEquipmentForGuests?: string;
      personalProtectiveEquipmentForStaff?: string;
      temperatureControlForGuests?: string;
      temperatureControlForStaff?: string;
      enhancedDisinfectionMeasures?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesServicesAndAmenities?: {
    name?: string;
    fields?: {
      id?: string;
      ironingFacilities?: string;
      ironingServicesArePaidSeparately?: string;
      laundryIsPaidSeparately?: string;
      telephone?: string;
      conciergeServices?: string;
      iron?: string;
      hairDryerOnRequest?: string;
      dryCleaningIsPaidSeparately?: string;
      luggageStorage?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesSports?: {
    name?: string;
    fields?: {
      id?: string;
      gym?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesStaffSpeaks?: {
    name?: string;
    fields?: {
      id?: string;
      inEnglish?: string;
      inRussian?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  HotelServicesTransfer?: {
    name?: string;
    fields?: {
      id?: string;
      transfer?: string;
      image?: string;
      hotelServicesId?: string;
      HotelServices?: string;
    };
  }
  ReviewHotels?: {
    name?: string;
    fields?: {
      id?: string;
      avatar?: string;
      name?: string;
      rating?: string;
      reviews?: string;
      date?: string;
      country?: string;
      hotelId?: string;
      Hotel?: string;
    };
  }
  ReviewRooms?: {
    name?: string;
    fields?: {
      id?: string;
      avatar?: string;
      name?: string;
      rating?: string;
      reviews?: string;
      date?: string;
      country?: string;
      Rooms?: string;
    };
  }
  RoomServices?: {
    name?: string;
    fields?: {
      id?: string;
      pool?: string;
      Rooms?: string;
    };
  }
  Rooms?: {
    name?: string;
    fields?: {
      id?: string;
      name?: string;
      cost?: string;
      description?: string;
      photo?: string;
      numberOfGuests?: string;
      hotelId?: string;
      favouritHotelsOrRoomsId?: string;
      historyOfBookingId?: string;
      roomServicesId?: string;
      reviewRoomsId?: string;
      Hotel?: string;
      ReviewRooms?: string;
      RoomServices?: string;
      User_Rooms_favouritHotelsOrRoomsIdToUser?: string;
      User_Rooms_historyOfBookingIdToUser?: string;
    };
  }
  Session?: {
    name?: string;
    fields?: {
      id?: string;
      sessionToken?: string;
      userId?: string;
      expires?: string;
      User?: string;
    };
  }
  User?: {
    name?: string;
    fields?: {
      id?: string;
      name?: string;
      surname?: string;
      gender?: string;
      city?: string;
      email?: string;
      emailVerified?: string;
      phone?: string;
      dateOfBirth?: string;
      image?: string;
      Account?: string;
      Rooms_Rooms_favouritHotelsOrRoomsIdToUser?: string;
      Rooms_Rooms_historyOfBookingIdToUser?: string;
      Session?: string;
    };
  }
  VerificationToken?: {
    name?: string;
    fields?: {
      identifier?: string;
      token?: string;
      expires?: string;
    };
  }}
export type Alias = {
  inflection?: Inflection | boolean;
  override?: Override;
};
interface FingerprintRelationField {
  count?: number | MinMaxOption;
}
interface FingerprintJsonField {
  schema?: any;
}
interface FingerprintDateField {
  options?: {
    minYear?: number;
    maxYear?: number;
  }
}
interface FingerprintNumberField {
  options?: {
    min?: number;
    max?: number;
  }
}
export interface Fingerprint {
  accounts?: {
    expiresAt?: FingerprintNumberField;
    user?: FingerprintRelationField;
  }
  hotels?: {
    id?: FingerprintNumberField;
    stars?: FingerprintNumberField;
    hotelServices?: FingerprintRelationField;
    reviewHotels?: FingerprintRelationField;
    rooms?: FingerprintRelationField;
  }
  hotelServices?: {
    id?: FingerprintNumberField;
    hotelId?: FingerprintNumberField;
    hotel?: FingerprintRelationField;
    hotelServicesAnimalsByHotelServicesId?: FingerprintRelationField;
    hotelServicesBeautyAndHealthsByHotelServicesId?: FingerprintRelationField;
    hotelServicesBusinessesByHotelServicesId?: FingerprintRelationField;
    hotelServicesChildrenByHotelServicesId?: FingerprintRelationField;
    hotelServicesEntertainmentsByHotelServicesId?: FingerprintRelationField;
    hotelServicesGeneralsByHotelServicesId?: FingerprintRelationField;
    hotelServicesInTheRoomsByHotelServicesId?: FingerprintRelationField;
    hotelServicesInternetsByHotelServicesId?: FingerprintRelationField;
    hotelServicesMealsByHotelServicesId?: FingerprintRelationField;
    hotelServicesParkingsByHotelServicesId?: FingerprintRelationField;
    hotelServicesSanitaryMeasuresByHotelServicesId?: FingerprintRelationField;
    hotelServicesServicesAndAmenitiesByHotelServicesId?: FingerprintRelationField;
    hotelServicesSportsByHotelServicesId?: FingerprintRelationField;
    hotelServicesStaffSpeaksByHotelServicesId?: FingerprintRelationField;
    hotelServicesTransfersByHotelServicesId?: FingerprintRelationField;
  }
  hotelServicesAnimals?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesBeautyAndHealths?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesBusinesses?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesChildren?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesEntertainments?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesGenerals?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesInTheRooms?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesInternets?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesMeals?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesParkings?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesSanitaryMeasures?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesServicesAndAmenities?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesSports?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesStaffSpeaks?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  hotelServicesTransfers?: {
    id?: FingerprintNumberField;
    hotelServicesId?: FingerprintNumberField;
    hotelService?: FingerprintRelationField;
  }
  reviewHotels?: {
    id?: FingerprintNumberField;
    rating?: FingerprintNumberField;
    date?: FingerprintDateField;
    hotelId?: FingerprintNumberField;
    hotel?: FingerprintRelationField;
  }
  reviewRooms?: {
    id?: FingerprintNumberField;
    rating?: FingerprintNumberField;
    date?: FingerprintDateField;
    roomsByReviewRoomsId?: FingerprintRelationField;
  }
  roomServices?: {
    id?: FingerprintNumberField;
    roomsByRoomServicesId?: FingerprintRelationField;
  }
  rooms?: {
    id?: FingerprintNumberField;
    cost?: FingerprintNumberField;
    numberOfGuests?: FingerprintNumberField;
    hotelId?: FingerprintNumberField;
    roomServicesId?: FingerprintNumberField;
    reviewRoomsId?: FingerprintNumberField;
    hotel?: FingerprintRelationField;
    reviewRoom?: FingerprintRelationField;
    roomService?: FingerprintRelationField;
    favouritHotelsOrRoom?: FingerprintRelationField;
    historyOfBooking?: FingerprintRelationField;
  }
  sessions?: {
    expires?: FingerprintDateField;
    user?: FingerprintRelationField;
  }
  users?: {
    emailVerified?: FingerprintDateField;
    dateOfBirth?: FingerprintDateField;
    accounts?: FingerprintRelationField;
    roomsByFavouritHotelsOrRoomsId?: FingerprintRelationField;
    roomsByHistoryOfBookingId?: FingerprintRelationField;
    sessions?: FingerprintRelationField;
  }
  verificationTokens?: {
    expires?: FingerprintDateField;
  }}