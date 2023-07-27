import { Injectable } from '@nestjs/common';
import { CreateTownshipDto } from './dto/create-township.dto';
import { UpdateTownshipDto } from './dto/update-township.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TownshipService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTownshipDto: CreateTownshipDto) {
    return this.prisma.township.create({ data: createTownshipDto });
  }

  findAll() {
    return this.prisma.township.findMany({
      include: {
        city: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.township.findUnique({
      where: { id },
      // include: {
      //   city: true,
      // },
    });
  }

  update(id: string, updateTownshipDto: UpdateTownshipDto) {
    return this.prisma.township.update({
      where: { id },
      data: updateTownshipDto,
    });
  }

  remove(id: string) {
    return this.prisma.township.delete({ where: { id } });
  }
}

//TODO: need to add error handling
