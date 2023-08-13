import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'Please use Sign Up route to create a new user!!';
  }

  findAll(getUserDto: GetUserDto) {
    return this.prisma.user.findMany({
      where: {
        name: {
          contains: getUserDto.name,
        },

        email: {
          contains: getUserDto.email,
        },

        role: getUserDto.role,
      },

      include: {
        city: true,
        township: true,
        parcels: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { parcels: true, city: true, township: true },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
