//#region structure
type JsonPrimitive = null | number | string | boolean;
type Nested<V> = V | { [s: string]: V | Nested<V> } | Array<V | Nested<V>>;
type Json = Nested<JsonPrimitive>;

interface Table_public_account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
}
interface Table_public_hotel {
  id: number;
  name: string;
  stars: number;
  type: string;
  description: string;
  additionalInfo: string | null;
  photo: string[] | null;
  country: string;
  city: string | null;
  address: string;
  legalAddress: string;
  policy: string[] | null;
}
interface Table_public_hotel_services {
  id: number;
  hotelId: number | null;
}
interface Table_public_hotel_services_animals {
  id: number;
  accommodationWithPetsIsPaidSeparately: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_beauty_and_health {
  id: number;
  firstAidKit: string;
  massageIsPaidSeparately: string;
  beautySalonIsPaidSeparately: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_business {
  id: number;
  conferenceHall: string;
  xerox: string;
  organizationOfMeetingsAndBanquets: string;
  videoRentalAndComputerEquipment: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_children {
  id: number;
  childrensTvChannels: string;
  accommodationIsSuitableForFamiliesChildren: string;
  babysittingAndChildCare: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_entertainment {
  id: number;
  suitableForFestiveEvents: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_general {
  id: number;
  designHotel: string;
  individualCheckInAndCheckOut: string;
  computer: string;
  airConditioning: string;
  fullDayHourFrontDesk: string;
  elevator: string;
  fireExtinguisher: string;
  nonSmokingHotel: string;
  heating: string;
  lateCheckOut: string;
  dishwasherCar: string;
  earlyCheckIn: string;
  washingMachine: string;
  expeditedCheckInAndCheckOut: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_in_the_rooms {
  id: number;
  vipAmenitiesInTheRoom: string;
  cableTv: string;
  bridalSuite: string;
  musicCenter: string;
  roomsForAllergySufferers: string;
  smokingRooms: string;
  nonSmokingRooms: string;
  roomService: string;
  safeInTheRoom: string;
  familyRooms: string;
  tv: string;
  refrigerator: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_internet {
  id: number;
  freeWiFi: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_meals {
  id: number;
  freeTeaOrCoffee: string;
  fullBoardIsPossible: string;
  halfBoardIsPossible: string;
  breakfastInTheRoom: string;
  kitchen: string;
  microwave: string;
  restaurant: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_parking {
  id: number;
  parkingIsPaidSeparately: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_sanitary_measures {
  id: number;
  personalProtectiveEquipmentForGuests: string;
  personalProtectiveEquipmentForStaff: string;
  temperatureControlForGuests: string;
  temperatureControlForStaff: string;
  enhancedDisinfectionMeasures: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_services_and_amenities {
  id: number;
  ironingFacilities: string;
  ironingServicesArePaidSeparately: string;
  laundryIsPaidSeparately: string;
  telephone: string;
  conciergeServices: string;
  iron: string;
  hairDryerOnRequest: string;
  dryCleaningIsPaidSeparately: string;
  luggageStorage: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_sports {
  id: number;
  gym: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_staff_speaks {
  id: number;
  inEnglish: string;
  inRussian: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_hotel_services_transfer {
  id: number;
  transfer: string;
  image: string;
  hotelServicesId: number | null;
}
interface Table_public_review_hotels {
  id: number;
  avatar: string;
  name: string;
  rating: number;
  reviews: string;
  date: string;
  country: string;
  hotelId: number | null;
}
interface Table_public_review_rooms {
  id: number;
  avatar: string;
  name: string;
  rating: number;
  reviews: string;
  date: string;
  country: string;
}
interface Table_public_room_services {
  id: number;
  pool: string[] | null;
}
interface Table_public_rooms {
  id: number;
  name: string;
  cost: number;
  description: string;
  photo: string[] | null;
  numberOfGuests: number;
  hotelId: number | null;
  favouritHotelsOrRoomsId: string | null;
  historyOfBookingId: string | null;
  roomServicesId: number | null;
  reviewRoomsId: number | null;
}
interface Table_public_session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: string;
}
interface Table_public_user {
  id: string;
  name: string | null;
  surname: string | null;
  gender: string | null;
  city: string | null;
  email: string | null;
  emailVerified: string | null;
  phone: string | null;
  dateOfBirth: string | null;
  image: string | null;
}
interface Table_public_verification_token {
  identifier: string;
  token: string;
  expires: string;
}
interface Schema_public {
  Account: Table_public_account;
  Hotel: Table_public_hotel;
  HotelServices: Table_public_hotel_services;
  HotelServicesAnimals: Table_public_hotel_services_animals;
  HotelServicesBeautyAndHealth: Table_public_hotel_services_beauty_and_health;
  HotelServicesBusiness: Table_public_hotel_services_business;
  HotelServicesChildren: Table_public_hotel_services_children;
  HotelServicesEntertainment: Table_public_hotel_services_entertainment;
  HotelServicesGeneral: Table_public_hotel_services_general;
  HotelServicesInTheRooms: Table_public_hotel_services_in_the_rooms;
  HotelServicesInternet: Table_public_hotel_services_internet;
  HotelServicesMeals: Table_public_hotel_services_meals;
  HotelServicesParking: Table_public_hotel_services_parking;
  HotelServicesSanitaryMeasures: Table_public_hotel_services_sanitary_measures;
  HotelServicesServicesAndAmenities: Table_public_hotel_services_services_and_amenities;
  HotelServicesSports: Table_public_hotel_services_sports;
  HotelServicesStaffSpeaks: Table_public_hotel_services_staff_speaks;
  HotelServicesTransfer: Table_public_hotel_services_transfer;
  ReviewHotels: Table_public_review_hotels;
  ReviewRooms: Table_public_review_rooms;
  RoomServices: Table_public_room_services;
  Rooms: Table_public_rooms;
  Session: Table_public_session;
  User: Table_public_user;
  VerificationToken: Table_public_verification_token;
}
interface Database {
  public: Schema_public;
}
interface Extension {

}
interface Tables_relationships {
  "public.Account": {
    parent: {
       Account_userId_fkey: "public.User";
    };
    children: {

    };
  };
  "public.Hotel": {
    parent: {

    };
    children: {
       HotelServices_hotelId_fkey: "public.HotelServices";
       ReviewHotels_hotelId_fkey: "public.ReviewHotels";
       Rooms_hotelId_fkey: "public.Rooms";
    };
  };
  "public.HotelServices": {
    parent: {
       HotelServices_hotelId_fkey: "public.Hotel";
    };
    children: {
       HotelServicesAnimals_hotelServicesId_fkey: "public.HotelServicesAnimals";
       HotelServicesBeautyAndHealth_hotelServicesId_fkey: "public.HotelServicesBeautyAndHealth";
       HotelServicesBusiness_hotelServicesId_fkey: "public.HotelServicesBusiness";
       HotelServicesChildren_hotelServicesId_fkey: "public.HotelServicesChildren";
       HotelServicesEntertainment_hotelServicesId_fkey: "public.HotelServicesEntertainment";
       HotelServicesGeneral_hotelServicesId_fkey: "public.HotelServicesGeneral";
       HotelServicesInTheRooms_hotelServicesId_fkey: "public.HotelServicesInTheRooms";
       HotelServicesInternet_hotelServicesId_fkey: "public.HotelServicesInternet";
       HotelServicesMeals_hotelServicesId_fkey: "public.HotelServicesMeals";
       HotelServicesParking_hotelServicesId_fkey: "public.HotelServicesParking";
       HotelServicesSanitaryMeasures_hotelServicesId_fkey: "public.HotelServicesSanitaryMeasures";
       HotelServicesServicesAndAmenities_hotelServicesId_fkey: "public.HotelServicesServicesAndAmenities";
       HotelServicesSports_hotelServicesId_fkey: "public.HotelServicesSports";
       HotelServicesStaffSpeaks_hotelServicesId_fkey: "public.HotelServicesStaffSpeaks";
       HotelServicesTransfer_hotelServicesId_fkey: "public.HotelServicesTransfer";
    };
  };
  "public.HotelServicesAnimals": {
    parent: {
       HotelServicesAnimals_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesBeautyAndHealth": {
    parent: {
       HotelServicesBeautyAndHealth_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesBusiness": {
    parent: {
       HotelServicesBusiness_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesChildren": {
    parent: {
       HotelServicesChildren_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesEntertainment": {
    parent: {
       HotelServicesEntertainment_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesGeneral": {
    parent: {
       HotelServicesGeneral_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesInTheRooms": {
    parent: {
       HotelServicesInTheRooms_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesInternet": {
    parent: {
       HotelServicesInternet_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesMeals": {
    parent: {
       HotelServicesMeals_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesParking": {
    parent: {
       HotelServicesParking_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesSanitaryMeasures": {
    parent: {
       HotelServicesSanitaryMeasures_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesServicesAndAmenities": {
    parent: {
       HotelServicesServicesAndAmenities_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesSports": {
    parent: {
       HotelServicesSports_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesStaffSpeaks": {
    parent: {
       HotelServicesStaffSpeaks_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.HotelServicesTransfer": {
    parent: {
       HotelServicesTransfer_hotelServicesId_fkey: "public.HotelServices";
    };
    children: {

    };
  };
  "public.ReviewHotels": {
    parent: {
       ReviewHotels_hotelId_fkey: "public.Hotel";
    };
    children: {

    };
  };
  "public.ReviewRooms": {
    parent: {

    };
    children: {
       Rooms_reviewRoomsId_fkey: "public.Rooms";
    };
  };
  "public.RoomServices": {
    parent: {

    };
    children: {
       Rooms_roomServicesId_fkey: "public.Rooms";
    };
  };
  "public.Rooms": {
    parent: {
       Rooms_hotelId_fkey: "public.Hotel";
       Rooms_reviewRoomsId_fkey: "public.ReviewRooms";
       Rooms_roomServicesId_fkey: "public.RoomServices";
       Rooms_favouritHotelsOrRoomsId_fkey: "public.User";
       Rooms_historyOfBookingId_fkey: "public.User";
    };
    children: {

    };
  };
  "public.Session": {
    parent: {
       Session_userId_fkey: "public.User";
    };
    children: {

    };
  };
  "public.User": {
    parent: {

    };
    children: {
       Account_userId_fkey: "public.Account";
       Rooms_favouritHotelsOrRoomsId_fkey: "public.Rooms";
       Rooms_historyOfBookingId_fkey: "public.Rooms";
       Session_userId_fkey: "public.Session";
    };
  };
}
//#endregion

//#region select
type SelectedTable = { id: string; schema: string; table: string };

type SelectDefault = {
  /**
   * Define the "default" behavior to use for the tables in the schema.
   * If true, select all tables in the schema.
   * If false, select no tables in the schema.
   * If "structure", select only the structure of the tables in the schema but not the data.
   * @defaultValue true
   */
  $default?: SelectObject;
};

type DefaultKey = keyof SelectDefault;

type SelectObject = boolean | "structure";

type ExtensionsSelect<TSchema extends keyof Database> =
  TSchema extends keyof Extension
    ? {
        /**
         * Define if you want to select the extension data.
         * @defaultValue false
         */
        $extensions?:
          | boolean
          | {
              [TExtension in Extension[TSchema]]?: boolean;
            };
      }
    : {};

type SelectConfig = SelectDefault & {
  [TSchema in keyof Database]?:
    | SelectObject
    | (SelectDefault &
        ExtensionsSelect<TSchema> & {
          [TTable in keyof Database[TSchema]]?: SelectObject;
        });
};

// Apply the __default key if it exists to each level of the select config (schemas and tables)
type ApplyDefault<TSelectConfig extends SelectConfig> = {
  [TSchema in keyof Database]-?: {
    [TTable in keyof Database[TSchema]]-?: TSelectConfig[TSchema] extends SelectObject
      ? TSelectConfig[TSchema]
      : TSelectConfig[TSchema] extends Record<any, any>
      ? TSelectConfig[TSchema][TTable] extends SelectObject
        ? TSelectConfig[TSchema][TTable]
        : TSelectConfig[TSchema][DefaultKey] extends SelectObject
        ? TSelectConfig[TSchema][DefaultKey]
        : TSelectConfig[DefaultKey] extends SelectObject
        ? TSelectConfig[DefaultKey]
        : true
      : TSelectConfig[DefaultKey] extends SelectObject
      ? TSelectConfig[DefaultKey]
      : true;
  };
};

type ExtractValues<T> = T extends object ? T[keyof T] : never;

type GetSelectedTable<TSelectSchemas extends SelectConfig> = ExtractValues<
  ExtractValues<{
    [TSchema in keyof TSelectSchemas]: {
      [TTable in keyof TSelectSchemas[TSchema] as TSelectSchemas[TSchema][TTable] extends true
        ? TTable
        : never]: TSchema extends string
        ? TTable extends string
          ? { id: `${TSchema}.${TTable}`; schema: TSchema; table: TTable }
          : never
        : never;
    };
  }>
>;
//#endregion

//#region transform
type TransformMode = "auto" | "strict" | "unsafe" | undefined;


type TransformOptions<TTransformMode extends TransformMode> = {
  /**
   * The type for defining the transform mode.
   *
   * There are three modes available:
   *
   * - "auto" - Automatically transform the data for any columns, tables or schemas that have not been specified in the config
   * - "strict" - In this mode, Snaplet expects a transformation to be given in the config for every column in the database. If any columns have not been provided in the config, Snaplet will not capture the snapshot, but instead tell you which columns, tables, or schemas have not been given
   * - "unsafe" - This mode copies over values without any transformation. If a transformation is given for a column in the config, the transformation will be used instead
   * @defaultValue "unsafe"
   */
  $mode?: TTransformMode;
  /**
   * If true, parse JSON objects during transformation.
   * @defaultValue false
   */
  $parseJson?: boolean;
};

// This type is here to turn a Table with scalars values (string, number, etc..) for columns into a Table
// with either scalar values or a callback function that returns the scalar value
type ColumnWithCallback<TSchema extends keyof Database, TTable extends keyof Database[TSchema]> = {
  [TColumn in keyof Database[TSchema][TTable]]:
    Database[TSchema][TTable][TColumn] |
    ((ctx: {
      row: Database[TSchema][TTable];
      value: Database[TSchema][TTable][TColumn];
    }) => Database[TSchema][TTable][TColumn])
};

type DatabaseWithCallback = {
  [TSchema in keyof Database]: {
    [TTable in keyof Database[TSchema]]:
      | ((ctx: {
          row: Database[TSchema][TTable];
          rowIndex: number;
        }) => ColumnWithCallback<TSchema, TTable>)
      | ColumnWithCallback<TSchema, TTable>
  };
};

type SelectDatabase<TSelectedTable extends SelectedTable> = {
  [TSchema in keyof DatabaseWithCallback as TSchema extends NonNullable<TSelectedTable>["schema"]
    ? TSchema
    : never]: {
    [TTable in keyof DatabaseWithCallback[TSchema] as TTable extends Extract<
      TSelectedTable,
      { schema: TSchema }
    >["table"]
      ? TTable
      : never]: DatabaseWithCallback[TSchema][TTable];
  };
};

type PartialTransform<T> = T extends (...args: infer P) => infer R
  ? (...args: P) => Partial<R>
  : Partial<T>;

type IsNever<T> = [T] extends [never] ? true : false;

type TransformConfig<
  TTransformMode extends TransformMode,
  TSelectedTable extends SelectedTable
> = TransformOptions<TTransformMode> &
  (IsNever<TSelectedTable> extends true
    ? never
    : SelectDatabase<TSelectedTable> extends infer TSelectedDatabase
    ? TTransformMode extends "strict"
      ? TSelectedDatabase
      : {
          [TSchema in keyof TSelectedDatabase]?: {
            [TTable in keyof TSelectedDatabase[TSchema]]?: PartialTransform<
              TSelectedDatabase[TSchema][TTable]
            >;
          };
        }
    : never);
//#endregion

//#region subset
type NonEmptyArray<T> = [T, ...T[]];

/**
 * Represents an exclusive row limit percent.
 */
type ExclusiveRowLimitPercent =
| {
  percent?: never;
  /**
   * Represents a strict limit of the number of rows captured on target
   */
  rowLimit: number
}
| {
  /**
   * Represents a random percent to be captured on target (1-100)
   */
  percent: number;
  rowLimit?: never
}

// Get the type of a target in the config.subset.targets array
type SubsetTarget<TSelectedTable extends SelectedTable> = {
  /**
   * The ID of the table to target
   */
  table: TSelectedTable["id"];
  /**
   * The order on which your target will be filtered useful with rowLimit parameter
   *
   * @example
   * orderBy: `"User"."createdAt" desc`
   */
  orderBy?: string;
} & (
  | {
    /**
     * The where filter to be applied on the target
     *
     * @example
     * where: `"_prisma_migrations"."name" IN ('migration1', 'migration2')`
     */
    where: string
  } & Partial<ExclusiveRowLimitPercent>
  | {
    /**
     * The where filter to be applied on the target
     */
    where?: string
  } & ExclusiveRowLimitPercent
);

type GetSelectedTableChildrenKeys<TTable extends keyof Tables_relationships> = keyof Tables_relationships[TTable]['children']
type GetSelectedTableParentKeys<TTable extends keyof Tables_relationships> = keyof Tables_relationships[TTable]['parent']
type GetSelectedTableRelationsKeys<TTable extends keyof Tables_relationships> = GetSelectedTableChildrenKeys<TTable> | GetSelectedTableParentKeys<TTable>
type SelectedTablesWithRelationsIds<TSelectedTable extends SelectedTable['id']> = TSelectedTable extends keyof Tables_relationships ? TSelectedTable : never

/**
 * Represents the options to choose the followNullableRelations of subsetting.
 */
type FollowNullableRelationsOptions<TSelectedTable extends SelectedTable> =
  // Type can be a global boolean definition
  boolean
  // Or can be a mix of $default and table specific definition
  | { $default: boolean } & ({
  // If it's a table specific definition and the table has relationships
  [TTable in SelectedTablesWithRelationsIds<TSelectedTable["id"]>]?:
    // It's either a boolean or a mix of $default and relationship specific definition
    boolean |
    {
      [Key in GetSelectedTableRelationsKeys<TTable> | '$default']?:  boolean
    }
});


/**
 * Represents the options to choose the maxCyclesLoop of subsetting.
 */
type MaxCyclesLoopOptions<TSelectedTable extends SelectedTable> =
// Type can be a global number definition
number
// Or can be a mix of $default and table specific definition
| { $default: number } & ({
  // If it's a table specific definition and the table has relationships
  [TTable in SelectedTablesWithRelationsIds<TSelectedTable["id"]>]?:
    // It's either a number or a mix of $default and relationship specific definition
    number |
    {
      [Key in GetSelectedTableRelationsKeys<TTable> | '$default']?:  number
    }
});


/**
 * Represents the options to choose the maxChildrenPerNode of subsetting.
 */
type MaxChildrenPerNodeOptions<TSelectedTable extends SelectedTable> =
// Type can be a global number definition
number
// Or can be a mix of $default and table specific definition
| { $default: number } & ({
  // If it's a table specific definition and the table has relationships
  [TTable in SelectedTablesWithRelationsIds<TSelectedTable["id"]>]?:
    // It's either a number or a mix of $default and relationship specific definition
    number |
    {
      [Key in GetSelectedTableRelationsKeys<TTable> | '$default']?:  number
    }
});

/**
 * Represents the configuration for subsetting the snapshot.
 */
type SubsetConfig<TSelectedTable extends SelectedTable> = {
  /**
   * Specifies whether subsetting is enabled.
   *  @defaultValue true
   */
  enabled?: boolean;

  /**
   * Specifies the version of the subsetting algorithm
   *
   * @defaultValue "3"
   * @deprecated
   */
  version?: "1" | "2" | "3";

  /**
   * Specifies whether to eagerly load related tables.
   * @defaultValue false
   */
  eager?: boolean;

  /**
   * Specifies whether to keep tables that are not connected to any other tables.
   * @defaultValue false
   */
  keepDisconnectedTables?: boolean;

  /**
   * Specifies whether to follow nullable relations.
   * @defaultValue false
   */
  followNullableRelations?: FollowNullableRelationsOptions<TSelectedTable>;

  /**
   *  Specifies the maximum number of children per node.
   *  @defaultValue unlimited
   */
  maxChildrenPerNode?: MaxChildrenPerNodeOptions<TSelectedTable>;

  /**
   * Specifies the maximum number of cycles in a loop.
   * @defaultValue 10
   */
  maxCyclesLoop?: MaxCyclesLoopOptions<TSelectedTable>;

  /**
   * Specifies the root targets for subsetting. Must be a non-empty array
   */
  targets: NonEmptyArray<SubsetTarget<TSelectedTable>>;

  /**
   * Specifies the task sorting algorithm.
   * By default, the algorithm will not sort the tasks.
   */
  taskSortAlgorithm?: "children" | "idsCount";
}
//#endregion


  //#region introspect
  type VirtualForeignKey<
    TTFkTable extends SelectedTable,
    TTargetTable extends SelectedTable
  > =
  {
    fkTable: TTFkTable['id'];
    targetTable: TTargetTable['id'];
    keys: NonEmptyArray<
      {
        // TODO: Find a way to strongly type this to provide autocomplete when writing the config
        /**
         * The column name present in the fkTable that is a foreign key to the targetTable
         */
        fkColumn: string;
        /**
         * The column name present in the targetTable that is a foreign key to the fkTable
         */
        targetColumn: string;
      }
    >
  }

  type IntrospectConfig<TSelectedTable extends SelectedTable> = {
    /**
     * Allows you to declare virtual foreign keys that are not present as foreign keys in the database.
     * But are still used and enforced by the application.
     */
    virtualForeignKeys?: Array<VirtualForeignKey<TSelectedTable, TSelectedTable>>;
  }
  //#endregion

type Validate<T, Target> = {
  [K in keyof T]: K extends keyof Target ? T[K] : never;
};

type TypedConfig<
  TSelectConfig extends SelectConfig,
  TTransformMode extends TransformMode
> =  GetSelectedTable<
  ApplyDefault<TSelectConfig>
> extends SelectedTable
  ? {
    /**
     * Parameter to configure the generation of data.
     * {@link https://docs.snaplet.dev/core-concepts/seed}
     */
      seed?: {
        alias?: import("./snaplet-client").Alias;
        fingerprint?: import("./snaplet-client").Fingerprint;
      }
    /**
     * Parameter to configure the inclusion/exclusion of schemas and tables from the snapshot.
     * {@link https://docs.snaplet.dev/reference/configuration#select}
     */
      select?: Validate<TSelectConfig, SelectConfig>;
      /**
       * Parameter to configure the transformations applied to the data.
       * {@link https://docs.snaplet.dev/reference/configuration#transform}
       */
      transform?: TransformConfig<TTransformMode, GetSelectedTable<ApplyDefault<TSelectConfig>>>;
      /**
       * Parameter to capture a subset of the data.
       * {@link https://docs.snaplet.dev/reference/configuration#subset}
       */
      subset?: SubsetConfig<GetSelectedTable<ApplyDefault<TSelectConfig>>>;

      /**
       * Parameter to augment the result of the introspection of your database.
       * {@link https://docs.snaplet.dev/references/data-operations/introspect}
       */
      introspect?: IntrospectConfig<GetSelectedTable<ApplyDefault<TSelectConfig>>>;
    }
  : never;

declare module "snaplet" {
  class JsonNull {}
  type JsonClass = typeof JsonNull;
  /**
   * Use this value to explicitely set a json or jsonb column to json null instead of the database NULL value.
   */
  export const jsonNull: InstanceType<JsonClass>;
  /**
  * Define the configuration for Snaplet capture process.
  * {@link https://docs.snaplet.dev/reference/configuration}
  */
  export function defineConfig<
    TSelectConfig extends SelectConfig,
    TTransformMode extends TransformMode = undefined
  >(
    config: TypedConfig<TSelectConfig, TTransformMode>
  ): TypedConfig<TSelectConfig, TTransformMode>;
}