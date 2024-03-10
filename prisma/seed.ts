// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   this.hotel = await prisma.hotel.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       name: "FioLeto",
//       stars: 5,
//       description: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице",
//       additionalInfo: "с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
//       hotelServices: {
//         create: {
//           terrace: 'Check out Prisma with Next.js'
//         },
//       },
//       rooms: {
//         create: {
//           name: "22",
//           cost: 2100,
//           description: "asdasd asd asd asdasd",
//           photo: ["asdasd"],
//           numberOfGuests: 5,
//         }
//       },
//       photo: ["123", "321"],
//       country: "Russia",
//       address: "Anapa",
//       legalAddress: ["lll"],
//       policy: [new Date().toLocaleString(), new Date().toLocaleString()],
//     }
//   });

//   this.room = await prisma.room.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       name: "double room",
//       cost: 2100,
//       description: "asdasd asd asd asdasd",
//       photo: ["asdasd"],
//       numberOfGuests: 5,
//     }
//   });

//   this.roomServices = await prisma.roomServices.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       pool: ["asdasd"],
//       roomId: 1
//     }
//   });

//   this.hotelServices = await prisma.hotelServices.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       terrace: "asdasd",
//     }
//   });

//   this.reviewHotels = await prisma.reviewHotels.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       avatar: "asd",
//       name: "Arm",
//       rating: 8,
//       reviews: "Метро в 5 минутах ходьбы. Рядом располагается Измайловский собор,колесо обозрения Ресепшн отличный. В номере убирались ежедневно. Есть фен, средства личной гигиены пополняли ежедневно. Рекомендую отель. Буду пользоваться его услугами в дальнейшем",
//       date: new Date().toLocaleString(),
//       country: "Russia",
//     }
//   });

//   this.reviewRooms = await prisma.reviewRooms.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       roomsId: 1
//     }
//   });
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })