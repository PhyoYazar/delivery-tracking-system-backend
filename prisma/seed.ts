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

  // const sender = await prisma.user.create({
  //   data: {
  //     name: 'yarzar',
  //     phone_number: '09789529686',
  //     address: 'NO.123, br nyr',

  //     township: 'Tarmwe',
  //     city: 'Yangon',
  //     role: 'SENDER',
  //   },
  // });

  // const receiver = await prisma.user.create({
  //   data: {
  //     name: 'jeedi',
  //     phone_number: '09123456789',
  //     address: 'NO.123, br nyr',

  //     township: 'Hlaing',
  //     city: 'Yangon',
  //     role: 'RECEIVER',
  //   },
  // });

  // const deliver = await prisma.user.create({
  //   data: {
  //     name: 'rayleigh',
  //     phone_number: '09987654321',
  //     address: 'NO.123, br nyr',

  //     township: 'Alone',
  //     city: 'Yangon',
  //     role: 'DELIVER',
  //   },
  // });

  // const location = await prisma.location.create({
  //   data: {
  //     latitude: '30.2343',
  //     longitude: '130.2343',
  //   },
  // });

  const user4 = await prisma.user.create({
    data: {
      name: 'test',
      phone_number: '09888888888',
      address: 'NO.123, br nyr',

      township: 'Bahan',
      city: 'Yangon',
      role: 'SENDER',

      parcels: {
        create: [
          {
            price: 200,
            picked_up: false,
            arrived_warehouse: false,
            finish: false,

            location_id: 'f3fae8c9-cbf4-434d-8700-70743e1e930a',
          },
        ],
      },
    },
  });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
