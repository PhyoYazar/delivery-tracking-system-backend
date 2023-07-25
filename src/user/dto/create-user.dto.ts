import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @IsString()
  @ApiProperty()
  phone_number: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  address: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  city_id: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  township_id: string;

  @IsEnum(Role)
  @IsOptional()
  @ApiProperty()
  role: Role;
}
