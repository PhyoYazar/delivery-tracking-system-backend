import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  signUpLocal(signUpDto: SignUpDto) {
    return 'This action adds a new auth';
  }

  signInLocal(signIpDto: SignInDto) {
    return '';
  }

  // logout() {
  //   return '';
  // }

  // refreshTokens() {
  //   return '';
  // }
}
