import { Injectable } from '@nestjs/common';
import { CreateSenderDto } from './dto/create-sender.dto';
import { UpdateSenderDto } from './dto/update-sender.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SenderService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSenderDto: CreateSenderDto) {
    return this.prisma.sender.create({
      data: createSenderDto,
    });
  }

  findAll() {
    return this.prisma.sender.findMany();
  }

  findOne(id: string) {
    return this.prisma.sender.findUnique({ where: { id } });
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
