import { Injectable } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParcelService {
  constructor(private prisma: PrismaService) {}

  create(createParcelDto: CreateParcelDto) {
    return this.prisma.parcel.create({
      data: createParcelDto,
    });
  }

  findAll() {
    return this.prisma.parcel.findMany();
  }

  findOne(id: string) {
    return this.prisma.parcel.findUnique({ where: { id } });
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
