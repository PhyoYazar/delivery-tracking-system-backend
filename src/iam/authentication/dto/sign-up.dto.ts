import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @IsOptional()
  @ApiProperty()
  role: Role;

  @IsString()
  @ApiProperty()
  phone_number: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  city_id: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  township_id: string;
}
