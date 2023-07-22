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

  const yangonCity = await prisma.city.upsert({
    where: { name: 'Yangon' },
    update: {},
    create: {
      name: 'Yangon',
    },
  });

  const tarmweTownship = await prisma.township.upsert({
    where: { name: 'Tarmwe' },
    update: {},
    create: {
      name: 'Tarmwe',
      city_id: yangonCity.id,
    },
  });

  const aloneTownship = await prisma.township.upsert({
    where: { name: 'Alone' },
    update: {},
    create: {
      name: 'Alone',
      city_id: yangonCity.id,
    },
  });

  const sender = await prisma.sender.create({
    data: {
      name: 'sender',
      phone_number: '011111',

      address: 'NO.123, br nyr',
      township_id: aloneTownship.id,
      city_id: yangonCity.id,
    },
  });

  const receiver = await prisma.receiver.create({
    data: {
      name: 'receiver',
      phone_number: '022222',
      address: 'NO.1, hello str, dhh d br nyr',

      township_id: tarmweTownship.id,
      city_id: yangonCity.id,
    },
  });

  // const deliver = await prisma.user.create({
  //   data: {
  //     name: 'deliver',
  //     phone_number: '09999999999',
  //     address: 'NO.123, br nyr',

  //     township: 'Alone',
  //     city: 'Yangon',
  //     role: 'deliver',
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
  //   },
  // });

  const parcel = await prisma.parcel.create({
    data: {
      price: 200,
      receiver_id: receiver.id,

      sender_id: sender.id,

      user_id: null,

      location_id: null,
    },
  });

  console.log(
    post1,
    post2,
    yangonCity,
    aloneTownship,
    tarmweTownship,
    sender,
    receiver,
    parcel,
  );
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
