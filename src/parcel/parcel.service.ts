import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetParcelDto } from './dto/get-parcel.dto';
import { UpdateParcelsDto } from './dto/update-parcels.dto';
import { Role } from '@prisma/client';

@Injectable()
export class ParcelService {
  constructor(private prisma: PrismaService) {}

  // findNearestTownship(base_township: string) {
  //   if (base_township === 'Hlaing') {
  //     return [
  //       {
  //         id: '2c3dbb50-b360-41ce-a527-d5c823200a77',
  //         name: 'Kamayut',
  //       },
  //       {
  //         id: '11234c20-4c76-4fd1-abb9-9005e5e6bf44',
  //         name: 'Yankin',
  //       },
  //     ];
  //   }

  //   if (base_township === 'Alone') {
  //     return [
  //       {
  //         id: 'cb31b918-4561-49b8-ba42-475d0c9b6474',
  //         name: 'San Chaung',
  //       },
  //       {
  //         id: '7f2bced8-fb75-4e8a-ac6b-69fb9f7fc37f',
  //         name: 'Kyaut Ta Tar',
  //       },
  //     ];
  //   }

  //   if (base_township === 'Kamayut') {
  //     return [
  //       {
  //         id: 'cb31b918-4561-49b8-ba42-475d0c9b6474',
  //         name: 'San Chaung',
  //       },
  //       {
  //         id: '11234c20-4c76-4fd1-abb9-9005e5e6bf44',
  //         name: 'Yankin',
  //       },
  //       {
  //         id: 'b56754d3-0d7d-4141-a53b-f6d4e39f7fe9',
  //         name: 'Hlaing',
  //       },
  //     ];
  //   }

  //   if (base_township === 'Tarmwe') {
  //     return [
  //       {
  //         id: '85780003-6668-41d3-afc8-4b9dc8827058',
  //         name: 'Pa Zun Taung',
  //       },
  //       {
  //         id: '11234c20-4c76-4fd1-abb9-9005e5e6bf44',
  //         name: 'Yankin',
  //       },
  //       {
  //         id: '7e5ee27a-9b96-441a-ab02-f040dc7ef7ca',
  //         name: 'Thin Gan Gyun',
  //       },
  //       {
  //         id: '62c9a87f-7f73-485e-8b04-a102332b95f9',
  //         name: 'Tha Ke Ta',
  //       },
  //     ];
  //   }

  //   if (base_township === 'San Chaung') {
  //     return [
  //       {
  //         id: '2c3dbb50-b360-41ce-a527-d5c823200a77',
  //         name: 'Kamayut',
  //       },
  //       {
  //         id: '4f055d72-4013-4b27-8f61-8c8f5be02cfb',
  //         name: 'Alone',
  //       },
  //     ];
  //   }

  //   if (base_township === 'Kyaut Ta Tar') {
  //     return [
  //       {
  //         id: '9f51e122-0eac-4dfa-8c80-64d4d21d50ef',
  //         name: 'Tarmwe',
  //       },
  //       {
  //         id: '4f055d72-4013-4b27-8f61-8c8f5be02cfb',
  //         name: 'Alone',
  //       },
  //       {
  //         id: '85780003-6668-41d3-afc8-4b9dc8827058',
  //         name: 'Pa Zun Taung',
  //       },
  //     ];
  //   }

  //   if (base_township === 'Pa Zun Taung') {
  //     return [
  //       {
  //         id: '7f2bced8-fb75-4e8a-ac6b-69fb9f7fc37f',
  //         name: 'Kyaut Ta Tar',
  //       },
  //       {
  //         id: '9f51e122-0eac-4dfa-8c80-64d4d21d50ef',
  //         name: 'Tarmwe',
  //       },
  //       {
  //         id: '62c9a87f-7f73-485e-8b04-a102332b95f9',
  //         name: 'Tha Ke Ta',
  //       },
  //     ];
  //   }

  //   if (base_township === 'Yankin') {
  //     return [
  //       {
  //         id: '9f51e122-0eac-4dfa-8c80-64d4d21d50ef',
  //         name: 'Tarmwe',
  //       },
  //       {
  //         id: 'cb31b918-4561-49b8-ba42-475d0c9b6474',
  //         name: 'San Chaung',
  //       },
  //     ];
  //   }

  //   if (base_township === 'Thin Gan Gyun') {
  //     return [
  //       {
  //         id: '9f51e122-0eac-4dfa-8c80-64d4d21d50ef',
  //         name: 'Tarmwe',
  //       },
  //       {
  //         id: '11234c20-4c76-4fd1-abb9-9005e5e6bf44',
  //         name: 'Yankin',
  //       },
  //       {
  //         id: '62c9a87f-7f73-485e-8b04-a102332b95f9',
  //         name: 'Tha Ke Ta',
  //       },
  //     ];
  //   }

  //   if (base_township === 'Tha Ke Ta') {
  //     return [
  //       {
  //         id: '9f51e122-0eac-4dfa-8c80-64d4d21d50ef',
  //         name: 'Tarmwe',
  //       },
  //       {
  //         id: '85780003-6668-41d3-afc8-4b9dc8827058',
  //         name: 'Pa Zun Taung',
  //       },
  //       {
  //         id: '7e5ee27a-9b96-441a-ab02-f040dc7ef7ca',
  //         name: 'Thin Gan Gyun',
  //       },
  //     ];
  //   }
  // }

  // find picker to assign parcels

  async findPickers(township_id: string, township_name: string, role: Role) {
    // 2. find picker by sender's township_id
    const assignee = await this.prisma.user.findMany({
      where: { township: { id: township_id }, role },
      include: {
        parcels: true,
      },
    });
    if (!assignee) {
      throw new NotFoundException(
        `There is no assignee found who lives in ${township_name}`,
      );
    }

    // 3. check who picker have less than 5 parcels to deliver
    return assignee.find((assignee) => {
      const activeParcels = assignee.parcels.filter((p) => {
        if (role === 'picker') {
          return p.accept_picked_up && !p.arrived_warehouse;
        } else {
          return p.accept_deliver && !p.finish;
        }
      });

      return activeParcels.length < 5;
    });
  }

  async assignPicker(id: string, role: Role) {
    let assignee;
    // 1. find sender township by id
    if (role === 'deliver') {
      assignee = await this.prisma.receiver.findUnique({
        where: { id },
        include: { township: true },
      });
    }

    if (role === 'picker') {
      assignee = await this.prisma.sender.findUnique({
        where: { id },
        include: { township: true },
      });
    }
    if (!assignee) {
      throw new NotFoundException(`Assignee is not found!`);
    }

    const assignPicker = await this.findPickers(
      assignee.township_id,
      assignee.township.name,
      role,
    );

    // // 4. if every picker are busy, find the picker who is the nearest township
    // if (assignPicker === undefined) {
    //   const nearestTowns = await this.findNearestTownship(sender.township.name);

    //   for (const towns of nearestTowns) {
    //     const assignPicker = await this.findPickers(towns.id, towns.name);

    //     if (assignPicker !== undefined) {
    //       return assignPicker;
    //     }
    //   }

    //   throw new NotFoundException('Every Picker are busy now');
    // }

    // return the assing picker
    return assignPicker;
  }

  async autoAssign(parcelId: string, role: Role) {
    const parcel = await this.findOne(parcelId);

    if (!parcel) throw new NotFoundException('Parcel does not exist');

    // 5. and assign the parcels to the picker
    const assignee = await this.assignPicker(
      role === 'deliver' ? parcel.receiver_id : parcel.sender_id,
      role,
    );

    if (!assignee)
      throw new NotFoundException(
        'There is no assignee who can pick up the parcel',
      );

    return this.prisma.parcel.update({
      where: { id: parcelId },
      data: { user_id: assignee.id },
    });
  }

  async create(createParcelDto: CreateParcelDto) {
    return this.prisma.parcel.create({
      data: createParcelDto,
    });
  }

  findAll(getParcelDto: GetParcelDto) {
    const filterSenderReceiverArray = [
      { name: getParcelDto.name },
      {
        phone_number: getParcelDto.phone_number,
      },
    ];

    return this.prisma.parcel.findMany({
      where: {
        OR: [
          {
            sender: {
              AND: filterSenderReceiverArray,
            },
          },
          {
            receiver: {
              AND: filterSenderReceiverArray,
            },
          },
        ],

        sender: {
          township: {
            name: getParcelDto.sender_township,
          },
        },

        receiver: {
          township: {
            name: getParcelDto.receiver_township,
          },
        },

        user_id: getParcelDto.user_id,

        price: getParcelDto.price,
        picked_up: getParcelDto.picked_up,
        accept_picked_up: getParcelDto.accept_picked_up,
        arrived_warehouse: getParcelDto.arrived_warehouse,
        deliver: getParcelDto.deliver,
        accept_deliver: getParcelDto.accept_deliver,
        finish: getParcelDto.finish,
      },

      orderBy: {
        created_at: 'desc',
      },

      include: {
        sender: {
          include: {
            city: true,
            township: true,
          },
        },
        receiver: {
          include: {
            city: true,
            township: true,
          },
        },
      },
    });
  }

  findParcelsByUser(userId: string, getParcelDto: GetParcelDto) {
    return this.prisma.parcel.findMany({
      where: {
        user_id: userId,
        picked_up: getParcelDto.picked_up,
        arrived_warehouse: getParcelDto.arrived_warehouse,
        deliver: getParcelDto.deliver,
        finish: getParcelDto.finish,

        sender: {
          address: {
            contains: getParcelDto.sender_address,
          },
        },

        receiver: {
          address: {
            contains: getParcelDto.receiver_address,
          },
        },
      },

      include: {
        user: true,
        sender: {
          include: {
            city: true,
            township: true,
          },
        },
        receiver: {
          include: {
            city: true,
            township: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.parcel.findUnique({
      where: { id },
      include: {
        user: true,
        sender: true,
        receiver: true,
      },
    });
  }

  update(id: string, updateParcelDto: UpdateParcelDto) {
    return this.prisma.parcel.update({
      where: { id },
      data: updateParcelDto,
    });
  }

  async updateParcels(updateParcelsDto: UpdateParcelsDto) {
    try {
      const results = await Promise.all(
        updateParcelsDto.parcels.map((parcelId) => {
          return this.prisma.parcel.update({
            where: { id: parcelId },
            data: {
              accept_picked_up: updateParcelsDto.accept_picked_up,
              picked_up: updateParcelsDto.picked_up,
              arrived_warehouse: updateParcelsDto.arrived_warehouse,
              accept_deliver: updateParcelsDto.accept_deliver,
              deliver: updateParcelsDto.deliver,
              finish: updateParcelsDto.finish,
              user_id: updateParcelsDto.user_id,
            },
          });
        }),
      );

      return {
        status: 'success',
        data: results,
      };
    } catch (err) {
      console.log(err);
    }
  }

  remove(id: string) {
    return this.prisma.parcel.delete({ where: { id } });
  }
}
