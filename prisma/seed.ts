import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of ...',
      description:
        "We are excited to share that today's Prisma  ORM release add stable support for MongoDB!",
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineer have been working hard, issuing new releases with many improvements',
      description:
        'Learn about everything in the prisma ecosystem and community from January to March 2022',
      published: true,
    },
  });

  console.log(post1, post2);

  // const sender = await prisma.sender.create({
  //   data: {
  //     name: 'sender',
  //     phone_number: '09111111111',

  //     address: 'NO.123, br nyr',
  //     township: 'Tarmwe',
  //     city: 'Yangon',

  //     // parcels: {
  //     //   create: [
  //     //     {
  //     //       price: 200,
  //     //       picked_up: false,
  //     //       arrived_warehouse: false,
  //     //       finish: false,
  //     //     },
  //     //   ],
  //     // },
  //   },
  // });

  // const receiver = await prisma.receiver.create({
  //   data: {
  //     name: 'receiver',
  //     phone_number: '09222222222',
  //     address: 'NO.123, br nyr',

  //     township: 'Hlaing',
  //     city: 'Yangon',

  //     // parcels: {
  //     //   create: [
  //     //     {
  //     //       price: 200,
  //     //       picked_up: false,
  //     //       arrived_warehouse: false,
  //     //       finish: false,
  //     //     },
  //     //   ],
  //     // },
  //   },
  // });

  // const deliver = await prisma.user.create({
  //   data: {
  //     name: 'deliver',
  //     phone_number: '09999999999',
  //     address: 'NO.123, br nyr',

  //     township: 'Alone',
  //     city: 'Yangon',
  //     role: 'deliver',

  //     // parcels: {
  //     //   create: [
  //     //     {
  //     //       price: 200,
  //     //       picked_up: false,
  //     //       arrived_warehouse: false,
  //     //       finish: false,
  //     //     },
  //     //   ],
  //     // },
  //   },
  // });

  // const admin = await prisma.user.create({
  //   data: {
  //     name: 'admin',
  //     phone_number: '09888888888',
  //     address: 'NO.123, br nyr',

  //     township: 'Bahan',
  //     city: 'Yangon',
  //     role: 'admin',
  //   },
  // });

  // const location = await prisma.location.create({
  //   data: {
  //     latitude: '30.2343',
  //     longitude: '130.2343',

  //     // parcels: {
  //     //   create: [
  //     //     {
  //     //       price: 200,
  //     //       picked_up: false,
  //     //       arrived_warehouse: false,
  //     //       finish: false,
  //     //     },
  //     //   ],
  //     // },
  //   },
  // });

  // const parcel = await prisma.parcel.create({
  //   data: {
  //     price: 200,
  //     picked_up: false,
  //     arrived_warehouse: false,
  //     finish: false,

  //     receiver_name: 'receiver',
  //     receiver_phone_number: '09222222222',

  //     sender_name: 'sender',
  //     sender_phone_number: '09111111111',

  //     user_id: null,

  //     location_id: null,
  //   },
  // });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
