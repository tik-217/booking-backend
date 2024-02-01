-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stars" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "additionalInfo" TEXT,
    "photo" TEXT[],
    "country" TEXT NOT NULL,
    "city" TEXT,
    "address" TEXT NOT NULL,
    "legalAddress" TEXT[],
    "policy" TIMESTAMP(3)[],

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT[],
    "numberOfGuests" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL,
    "favouritHotelsOrRoomsId" TEXT,
    "historyOfBookingId" TEXT,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomServices" (
    "id" SERIAL NOT NULL,
    "pool" TEXT[],
    "roomId" INTEGER,

    CONSTRAINT "RoomServices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HotelServices" (
    "id" SERIAL NOT NULL,
    "terrace" TEXT[],
    "hotelsId" INTEGER NOT NULL,

    CONSTRAINT "HotelServices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewHotels" (
    "id" SERIAL NOT NULL,
    "hotelsId" INTEGER NOT NULL,

    CONSTRAINT "ReviewHotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewRooms" (
    "id" SERIAL NOT NULL,
    "roomsId" INTEGER,

    CONSTRAINT "ReviewRooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "gender" TEXT,
    "city" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "phone" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_address_key" ON "Hotel"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_legalAddress_key" ON "Hotel"("legalAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_favouritHotelsOrRoomsId_fkey" FOREIGN KEY ("favouritHotelsOrRoomsId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_historyOfBookingId_fkey" FOREIGN KEY ("historyOfBookingId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomServices" ADD CONSTRAINT "RoomServices_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HotelServices" ADD CONSTRAINT "HotelServices_hotelsId_fkey" FOREIGN KEY ("hotelsId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewHotels" ADD CONSTRAINT "ReviewHotels_hotelsId_fkey" FOREIGN KEY ("hotelsId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewRooms" ADD CONSTRAINT "ReviewRooms_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
