import { Injectable } from '@nestjs/common';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReceiverService {
  constructor(private readonly prisma: PrismaService) {}

  create(createReceiverDto: CreateReceiverDto) {
    return this.prisma.receiver.create({
      data: createReceiverDto,
    });
  }

  findAll() {
    return this.prisma.receiver.findMany();
  }

  findOne(id: string) {
    return this.prisma.receiver.findUnique({
      where: { id },
      include: { parcels: true },
    });
  }

  update(id: string, updateReceiverDto: UpdateReceiverDto) {
    return this.prisma.receiver.update({
      where: { id },
      data: updateReceiverDto,
    });
  }

  remove(id: string) {
    return this.prisma.receiver.delete({
      where: { id },
    });
  }
}
