import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/local/signup')
  signUpLocal(@Body() signUpDto: SignUpDto) {
    return this.authService.signUpLocal(signUpDto);
  }

  @Post('/local/signin')
  signInLocal(@Body() signInDto: SignInDto) {
    return this.authService.signInLocal(signInDto);
  }

  // @Post('/logout')
  // logout() {
  //   return this.authService.logout();
  // }

  // @Post('/refresh')
  // refreshTokens() {
  //   return this.authService.refreshTokens();
  // }
}
