import { Injectable } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetParcelDto } from './dto/get-parcel.dto';

@Injectable()
export class ParcelService {
  constructor(private prisma: PrismaService) {}

  create(createParcelDto: CreateParcelDto) {
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
              township: {
                name: getParcelDto.township,
              },
            },
          },
          {
            receiver: {
              AND: filterSenderReceiverArray,
              township: {
                name: getParcelDto.township,
              },
            },
          },
        ],

        price: getParcelDto.price,
        picked_up: getParcelDto.picked_up,
        arrived_warehouse: getParcelDto.arrived_warehouse,
        deliver: getParcelDto.deliver,
        finish: getParcelDto.finish,
      },

      orderBy: {
        created_at: 'desc',
      },

      include: {
        sender: true,
        receiver: true,
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

  remove(id: string) {
    return this.prisma.parcel.delete({ where: { id } });
  }
}
