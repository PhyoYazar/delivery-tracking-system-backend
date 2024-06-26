import { Injectable } from '@nestjs/common';
import { CreateSenderDto } from './dto/create-sender.dto';
import { UpdateSenderDto } from './dto/update-sender.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetSenderDto } from './dto/get-sender.dto';

@Injectable()
export class SenderService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSenderDto: CreateSenderDto) {
    return this.prisma.sender.create({
      data: createSenderDto,
    });
  }

  findAll(getSenderDto: GetSenderDto) {
    return this.prisma.sender.findMany({
      where: {
        township_id: getSenderDto.township_id,
      },
      include: {
        city: true,
        township: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.sender.findUnique({
      where: { id },
      include: { parcels: true },
    });
  }

  update(id: string, updateSenderDto: UpdateSenderDto) {
    return this.prisma.sender.update({
      where: { id },
      data: updateSenderDto,
    });
  }

  remove(id: string) {
    return this.prisma.sender.delete({ where: { id } });
  }
}
